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
exports.updateDiagnostics = void 0;
const vscode = __importStar(require("vscode"));
const PLACEHOLDERS = [
    /\[Insert problem description here\]/gi,
    /\[Provide justification\]/gi,
    /\[Describe edge case.*?\]/gi,
    /\[Describe edgecase.*?\]/gi,
    /\[Topic\]/g,
    /\[Platform\]/g,
    /\[Step \d+\]/gi,
    /\[Insert core algorithmic intuition here\]/gi,
    /\[Update Topic\]/gi,
    /URL/g
];
function updateDiagnostics(document, collection) {
    const diagnostics = [];
    const text = document.getText();
    for (const regex of PLACEHOLDERS) {
        // Reset regex index
        regex.lastIndex = 0;
        let match;
        while ((match = regex.exec(text)) !== null) {
            const startPos = document.positionAt(match.index);
            const endPos = document.positionAt(match.index + match[0].length);
            const range = new vscode.Range(startPos, endPos);
            const diagnostic = new vscode.Diagnostic(range, `Placeholder needs to be filled: "${match[0]}"`, vscode.DiagnosticSeverity.Warning);
            diagnostic.code = 'dsa-placeholder';
            diagnostics.push(diagnostic);
        }
    }
    collection.set(document.uri, diagnostics);
}
exports.updateDiagnostics = updateDiagnostics;
//# sourceMappingURL=linter.js.map