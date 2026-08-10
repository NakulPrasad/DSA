import * as vscode from 'vscode';
import { enforceTemplate } from './formatter';
import { updateDiagnostics } from './linter';
import { fillMissingDetails } from './aiService';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('DSA Note Helper is active!');

    // 1. Register Format/Enforce Template Command
    let enforceCmd = vscode.commands.registerCommand('dsa-helper.enforceTemplate', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'markdown') {
            try {
                await enforceTemplate(editor.document);
                vscode.window.showInformationMessage('Enforced template on current DSA note.');
            } catch (e: any) {
                vscode.window.showErrorMessage(`Failed to enforce template: ${e.message}`);
            }
        } else {
            vscode.window.showWarningMessage('Please open a Markdown (.md) note file.');
        }
    });

    // 2. Register AI Fill Details Command
    let fillCmd = vscode.commands.registerCommand('dsa-helper.fillDetails', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'markdown') {
            try {
                await fillMissingDetails(editor.document);
            } catch (e: any) {
                vscode.window.showErrorMessage(`AI Service Error: ${e.message}`);
            }
        } else {
            vscode.window.showWarningMessage('Please open a Markdown (.md) note file.');
        }
    });

    // 3. Register Linter / Diagnostics Collection
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('dsa-note-helper');
    
    // Lint on file open
    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId === 'markdown') {
        updateDiagnostics(vscode.window.activeTextEditor.document, diagnosticCollection);
    }
    
    // Lint on file change
    let changeListener = vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document.languageId === 'markdown') {
            updateDiagnostics(e.document, diagnosticCollection);
        }
    });
    
    // Lint when active editor changes
    let editorChangeListener = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && editor.document.languageId === 'markdown') {
            updateDiagnostics(editor.document, diagnosticCollection);
        }
    });

    // 4. Register Auto-Template listener on file creation
    let createListener = vscode.workspace.onDidCreateFiles(async (event) => {
        for (const fileUri of event.files) {
            if (fileUri.path.endsWith('.md')) {
                const basename = path.basename(fileUri.fsPath);
                // Standardize Title from filename (e.g. 'E. TwoSum.md' -> 'Two Sum')
                let title = basename.replace(/^[EMHB]\.\s+/, "").replace(/\.md$/, "");
                // Insert spacing before capital letters (e.g. 'TwoSum' -> 'Two Sum')
                title = title.replace(/([A-Z])/g, ' $1').trim();
                
                let difficulty = "Easy";
                if (basename.startsWith("M. ")) {
                    difficulty = "Medium";
                } else if (basename.startsWith("H. ")) {
                    difficulty = "Hard";
                } else if (basename.startsWith("B. ")) {
                    difficulty = "Basic";
                }

                // Construct boilerplate template
                const template = `# ${title}

> **Difficulty:** ${difficulty}  
> **Topic / Pattern:** [Topic]  
> **Link:** [Platform](URL)

---

## 📝 Problem Statement

[Insert problem description here]

### Examples
\`\`\`text
Input: 
Output: 
\`\`\`

---

## 💡 Intuition & Core Approach

* **The Core Idea:** [Insert core algorithmic intuition here]
* **Key Steps:**
  - [Step 1]
  - [Step 2]

---

## 🎨 Visualization / Dry Run

[If applicable, embed visual diagram/illustration here]
![visualization](images/image-name.png)

---

## 💻 Implementation (Java)

\`\`\`java
class Solution {
    // Write code here
}
\`\`\`

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(N)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
`;

                const edit = new vscode.WorkspaceEdit();
                edit.insert(fileUri, new vscode.Position(0, 0), template);
                await vscode.workspace.applyEdit(edit);
                
                // Save document automatically
                const doc = await vscode.workspace.openTextDocument(fileUri);
                await doc.save();
            }
        }
    });

    context.subscriptions.push(
        enforceCmd, 
        fillCmd, 
        diagnosticCollection, 
        changeListener, 
        editorChangeListener,
        createListener
    );
}

export function deactivate() {}
