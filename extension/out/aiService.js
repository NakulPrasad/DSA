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
exports.fillMissingDetails = void 0;
const vscode = __importStar(require("vscode"));
const https = __importStar(require("https"));
const http = __importStar(require("http"));
const url = __importStar(require("url"));
async function fillMissingDetails(document) {
    const text = document.getText();
    const config = vscode.workspace.getConfiguration('dsa-helper');
    const provider = config.get('aiProvider', 'gemini');
    const geminiApiKey = config.get('geminiApiKey', '');
    const ollamaUrl = config.get('ollamaUrl', 'http://localhost:11434');
    const ollamaModel = config.get('ollamaModel', 'llama3');
    if (provider === 'gemini' && !geminiApiKey) {
        vscode.window.showErrorMessage('Gemini API Key is missing. Please set it in Settings -> DSA Note Helper.');
        return;
    }
    // Extract Title & Java Code
    const titleRegex = /^#\s+(.*)/m;
    const titleMatch = text.match(titleRegex);
    let title = "DSA Problem";
    if (titleMatch) {
        title = titleMatch[1].replace(/\[(.*?)\]\(.*?\)/, '$1').trim();
    }
    const javaRegex = /```java\n([\s\S]*?)\n```/;
    const javaMatch = text.match(javaRegex);
    if (!javaMatch) {
        vscode.window.showWarningMessage('No Java code block found in the active document. Add code in ```java block first.');
        return;
    }
    const javaCode = javaMatch[1].trim();
    // Formulate Prompt
    const prompt = `You are an expert Data Structures and Algorithms (DSA) assistant.
Analyze the following programming problem title: "${title}"
And its Java implementation:
\`\`\`java
${javaCode}
\`\`\`

Provide a JSON response matching exactly this TypeScript interface:
interface DsaNotesResponse {
    intuition: string; // 1-2 sentence core idea explanation (excluding code details)
    timeComplexity: string; // e.g. O(N) or O(log N)
    timeExplanation: string; // concise justification
    spaceComplexity: string; // e.g. O(1) or O(N)
    spaceExplanation: string; // concise justification
    edgeCases: string; // markdown bulleted list of 2 edge cases to handle
}
Output ONLY valid JSON. Do not include markdown code block formatting (like \`\`\`json) or any explanations outside the JSON.`;
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "Generating details using AI...",
        cancellable: false
    }, async (progress) => {
        try {
            let aiResultString = "";
            if (provider === 'gemini') {
                aiResultString = await callGeminiAPI(geminiApiKey, prompt);
            }
            else {
                aiResultString = await callOllamaAPI(ollamaUrl, ollamaModel, prompt);
            }
            // Parse response
            // Sometimes models return ```json ... ``` despite strict instructions
            let cleanJson = aiResultString.trim();
            if (cleanJson.startsWith("```")) {
                cleanJson = cleanJson.replace(/^```(?:json)?\n/, "").replace(/\n```$/, "").trim();
            }
            const responseObj = JSON.parse(cleanJson);
            await applyEdits(document, responseObj);
            vscode.window.showInformationMessage('Successfully filled note details using AI.');
        }
        catch (e) {
            vscode.window.showErrorMessage(`Failed to fill details: ${e.message}`);
        }
    });
}
exports.fillMissingDetails = fillMissingDetails;
function callGeminiAPI(apiKey, prompt) {
    const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const body = JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            responseMimeType: "application/json"
        }
    });
    return makeRequest(targetUrl, 'POST', { 'Content-Type': 'application/json' }, body)
        .then(res => {
        const parsed = JSON.parse(res);
        if (parsed.candidates && parsed.candidates[0] && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
            return parsed.candidates[0].content.parts[0].text;
        }
        throw new Error('Invalid response structure from Gemini API');
    });
}
function callOllamaAPI(baseUrl, model, prompt) {
    const targetUrl = `${baseUrl.replace(/\/$/, '')}/api/generate`;
    const body = JSON.stringify({
        model: model,
        prompt: prompt,
        stream: false,
        format: "json",
        options: {
            temperature: 0.2
        }
    });
    return makeRequest(targetUrl, 'POST', { 'Content-Type': 'application/json' }, body)
        .then(res => {
        const parsed = JSON.parse(res);
        return parsed.response;
    });
}
function makeRequest(targetUrl, method, headers, body) {
    return new Promise((resolve, reject) => {
        const parsedUrl = url.parse(targetUrl);
        const requestModule = parsedUrl.protocol === 'https:' ? https : http;
        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.path || '/',
            method: method,
            headers: headers
        };
        const req = requestModule.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(data);
                }
                else {
                    reject(new Error(`Status ${res.statusCode}: ${data}`));
                }
            });
        });
        req.on('error', (err) => {
            reject(err);
        });
        req.write(body);
        req.end();
    });
}
async function applyEdits(document, res) {
    let text = document.getText();
    // 1. Replace Intuition Placeholder
    text = text.replace(/(\* \*\*The Core Idea:\*\*).*?(\r?\n|$)/, `$1 ${res.intuition}$2`);
    // Alternatively replace placeholder explicitly if it matches [Insert ...]
    text = text.replace("[Insert core algorithmic intuition here]", res.intuition);
    // 2. Replace Complexity Justifications
    // Find the time complexity rows and insert justifications
    text = text.replace(/(\| \*\*Time Complexity\*\* \|).*?(\|).*?(\|)/, `$1 ${res.timeComplexity} $2 ${res.timeExplanation} $3`);
    text = text.replace(/(\| \*\*Space Complexity\*\* \|).*?(\|).*?(\|)/, `$1 ${res.spaceComplexity} $2 ${res.spaceExplanation} $3`);
    // 3. Replace Edge Cases Section
    const edgeCaseSectionRegex = /## ⚠️ Edge Cases & Pitfalls to Avoid\r?\n\r?\n([\s\S]*?)$/;
    if (edgeCaseSectionRegex.test(text)) {
        text = text.replace(edgeCaseSectionRegex, `## ⚠️ Edge Cases & Pitfalls to Avoid\n\n${res.edgeCases.trim()}\n`);
    }
    const edit = new vscode.WorkspaceEdit();
    const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length));
    edit.replace(document.uri, fullRange, text);
    await vscode.workspace.applyEdit(edit);
}
//# sourceMappingURL=aiService.js.map