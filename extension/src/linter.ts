import * as vscode from 'vscode';

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

export function updateDiagnostics(document: vscode.TextDocument, collection: vscode.DiagnosticCollection): void {
    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();

    for (const regex of PLACEHOLDERS) {
        // Reset regex index
        regex.lastIndex = 0;
        let match;
        while ((match = regex.exec(text)) !== null) {
            const startPos = document.positionAt(match.index);
            const endPos = document.positionAt(match.index + match[0].length);
            const range = new vscode.Range(startPos, endPos);

            const diagnostic = new vscode.Diagnostic(
                range,
                `Placeholder needs to be filled: "${match[0]}"`,
                vscode.DiagnosticSeverity.Warning
            );
            diagnostic.code = 'dsa-placeholder';
            diagnostics.push(diagnostic);
        }
    }

    collection.set(document.uri, diagnostics);
}
