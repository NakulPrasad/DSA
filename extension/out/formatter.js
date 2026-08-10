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
exports.enforceTemplate = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
async function enforceTemplate(document) {
    const text = document.getText();
    const basename = path.basename(document.fileName);
    // Parse difficulty from filename prefix
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
    // Extract Title & Link
    let title = basename.replace(/^[EMHB]\.\s+/, "").replace(/\.md$/, "").replace(/([A-Z])/g, ' $1').trim();
    let link = "";
    // Look for link pattern: # [Title](Link) or # Title
    const titleRegex = /^#\s+\[(.*?)\]\((.*?)\)/m;
    const titleMatch = text.match(titleRegex);
    if (titleMatch) {
        title = titleMatch[1];
        link = titleMatch[2];
    }
    else {
        const plainTitleRegex = /^#\s+(.*)/m;
        const plainTitleMatch = text.match(plainTitleRegex);
        if (plainTitleMatch) {
            title = plainTitleMatch[1].trim();
        }
    }
    // Extract Code Blocks
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)\n```/g;
    let match;
    let examples = "";
    let javaCode = "";
    while ((match = codeBlockRegex.exec(text)) !== null) {
        const lang = match[1];
        const code = match[2].trim();
        if (code.includes("Input:") || code.includes("Output:") || code.includes("Input :") || code.includes("Output :") || code.includes("Input=")) {
            examples += code + "\n\n";
        }
        else if (lang === 'java' || code.includes("class ") || code.includes("public ") || code.includes("static ") || (code.includes("int ") && code.includes("return "))) {
            javaCode = code;
        }
    }
    // Extract Topic
    let topic = "[Topic]";
    const topicMatch = text.match(/>\s*\*\*Topic\s*\/\s*Pattern:\*\*\s*(.*)/i);
    if (topicMatch) {
        topic = topicMatch[1].trim();
    }
    // Extract Problem Statement (Description)
    let description = "[Insert problem description here]";
    const descMatch = text.match(/## 📝 Problem Statement([\s\S]*?)(?:###|##|```)/);
    if (descMatch && descMatch[1].trim()) {
        description = descMatch[1].trim();
    }
    // Extract Intuition
    let intuition = "* **The Core Idea:** [Insert core algorithmic intuition here]\n* **Key Steps:**\n  - [Step 1]\n  - [Step 2]";
    const intuitionMatch = text.match(/## 💡 Intuition & Core Approach([\s\S]*?)(?:##|🎨|💻|📊|⚠️)/);
    if (intuitionMatch && intuitionMatch[1].trim()) {
        intuition = intuitionMatch[1].trim();
    }
    // Extract Visualization / Dry run images
    let visualization = "";
    const visRegex = /!\[.*?\]\((.*?)\)/g;
    let visMatch;
    while ((visMatch = visRegex.exec(text)) !== null) {
        visualization += `![visualization](${visMatch[1]})\n`;
    }
    // Extract Complexity Analysis
    let timeComplexity = "$O(1)$";
    let spaceComplexity = "$O(1)$";
    const timeMatch = text.match(/(?:Time|time)\s*(?:Complexity|complexity)?\s*[:=]?\s*([^\n\r|*]+)/);
    if (timeMatch) {
        timeComplexity = timeMatch[1].replace(/[|*`\/\\]/g, "").trim();
    }
    const spaceMatch = text.match(/(?:Space|space)\s*(?:Complexity|complexity)?\s*[:=]?\s*([^\n\r|*]+)/);
    if (spaceMatch) {
        spaceComplexity = spaceMatch[1].replace(/[|*`\/\\]/g, "").trim();
    }
    if (!timeComplexity) {
        timeComplexity = "$O(1)$";
    }
    if (!spaceComplexity) {
        spaceComplexity = "$O(1)$";
    }
    // Extract Edge Cases
    let edgeCases = "* **Edge Case 1:** [Describe edge case and handling]";
    const edgeMatch = text.match(/## ⚠️ Edge Cases & Pitfalls to Avoid([\s\S]*?)$/);
    if (edgeMatch && edgeMatch[1].trim()) {
        edgeCases = edgeMatch[1].trim();
    }
    // Standardize variables
    if (!javaCode) {
        javaCode = `class Solution {\n    // Write code here\n}`;
    }
    if (!examples) {
        examples = "Input: \nOutput: ";
    }
    // Build standard template content
    let newContent = `# ${title}

> **Difficulty:** ${difficulty}  
> **Topic / Pattern:** ${topic}  
> **Link:** [${title}](${link})

---

## 📝 Problem Statement

${description}

### Examples
\`\`\`text
${examples.trim()}
\`\`\`

---

## 💡 Intuition & Core Approach

${intuition}
`;
    if (visualization.trim()) {
        newContent += `\n---\n\n## 🎨 Visualization / Dry Run\n\n${visualization.trim()}\n`;
    }
    newContent += `
---

## 💻 Implementation (Java)

\`\`\`java
${javaCode}
\`\`\`

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | ${timeComplexity} | [Provide justification] |
| **Space Complexity** | ${spaceComplexity} | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

${edgeCases}
`;
    // Write back to document
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(text.length));
    edit.replace(document.uri, fullRange, newContent);
    await vscode.workspace.applyEdit(edit);
}
exports.enforceTemplate = enforceTemplate;
//# sourceMappingURL=formatter.js.map