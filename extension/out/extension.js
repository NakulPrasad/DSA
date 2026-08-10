"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const formatter_1 = require("./formatter");
const linter_1 = require("./linter");
const aiService_1 = require("./aiService");
const path = __importStar(require("path"));
function activate(context) {
    console.log('DSA Note Helper is active!');
    // 1. Register Format/Enforce Template Command
    let enforceCmd = vscode.commands.registerCommand('dsa-helper.enforceTemplate', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'markdown') {
            try {
                await (0, formatter_1.enforceTemplate)(editor.document);
                vscode.window.showInformationMessage('Enforced template on current DSA note.');
            }
            catch (e) {
                vscode.window.showErrorMessage(`Failed to enforce template: ${e.message}`);
            }
        }
        else {
            vscode.window.showWarningMessage('Please open a Markdown (.md) note file.');
        }
    });
    // 2. Register AI Fill Details Command
    let fillCmd = vscode.commands.registerCommand('dsa-helper.fillDetails', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'markdown') {
            try {
                await (0, aiService_1.fillMissingDetails)(editor.document);
            }
            catch (e) {
                vscode.window.showErrorMessage(`AI Service Error: ${e.message}`);
            }
        }
        else {
            vscode.window.showWarningMessage('Please open a Markdown (.md) note file.');
        }
    });
    // 3. Register Linter / Diagnostics Collection
    const diagnosticCollection = vscode.languages.createDiagnosticCollection('dsa-note-helper');
    // Lint on file open
    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId === 'markdown') {
        (0, linter_1.updateDiagnostics)(vscode.window.activeTextEditor.document, diagnosticCollection);
    }
    // Lint on file change
    let changeListener = vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document.languageId === 'markdown') {
            (0, linter_1.updateDiagnostics)(e.document, diagnosticCollection);
        }
    });
    // Lint when active editor changes
    let editorChangeListener = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor && editor.document.languageId === 'markdown') {
            (0, linter_1.updateDiagnostics)(editor.document, diagnosticCollection);
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
                }
                else if (basename.startsWith("H. ")) {
                    difficulty = "Hard";
                }
                else if (basename.startsWith("B. ")) {
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
    context.subscriptions.push(enforceCmd, fillCmd, diagnosticCollection, changeListener, editorChangeListener, createListener);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map