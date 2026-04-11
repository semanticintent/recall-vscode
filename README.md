# RECALL Language — VS Code Extension

**Syntax highlighting, diagnostics, autocomplete, hover, go-to-definition, and rename for `.rcl` files.**

[RECALL](https://github.com/semanticintent/recall-compiler) is a COBOL-inspired compiler for the web. This extension gives `.rcl` files first-class editor support in VS Code, powered by the [RECALL Language Server](https://github.com/semanticintent/recall-lsp).

---

## Features

### Syntax highlighting

Full TextMate grammar for `.rcl` files:

- Division and section headers (`IDENTIFICATION DIVISION.`, `PROCEDURE DIVISION.`)
- Identification keywords (`PROGRAM-ID.`, `DATE-WRITTEN.`, `AUTHOR.`)
- Data level numbers and field names (`01 HERO-HEADING`)
- PIC types (`PIC X(60)`, `PIC DATE`, `PIC PCT`)
- Element names (`HEADING-1`, `PARAGRAPH`, `CARD-LIST`, `CALLOUT`)
- `WITH INTENT` — distinct colour from other clause keywords
- String literals, numeric constants
- AUDIT DIVISION keywords (`CREATED-BY.`, `CHANGE-LOG.`)
- Line comments (`*`)

### Inline diagnostics

All 33 RCL diagnostic codes surfaced as you type — no compile step required. Errors and warnings appear as squiggles with the RCL code in the source annotation.

Because VS Code Copilot and Cursor both consume LSP diagnostics, RECALL field types and contract violations are visible to AI coding assistants.

### Autocomplete

Context-aware completions:

| Context | Candidates |
|---|---|
| After `DISPLAY` | All RECALL element names |
| After `PIC` | PIC types (`X(n)`, `DATE`, `URL`, `PCT`, `BOOL`, ...) |
| After `WITH DATA` / `USING` | Live DATA DIVISION field names from the current file |
| Inside PROCEDURE DIVISION | Element names + clause keywords |
| Top level | Division and section keywords |

### Hover

Hover over any DATA DIVISION field reference to see:

```
HERO-HEADING — DATA DIVISION field
• PIC: X(60)
• VALUE: "BUILT FOR THE AI ERA."
• COMMENT: opening line — keep punchy
```

Hover over an element name to see its description and usage.

### Go-to-definition

Press `F12` on any field reference in the PROCEDURE DIVISION to jump directly to its `01` declaration in the DATA DIVISION.

### Rename

Press `F2` on a DATA field name to rename it everywhere in the file simultaneously.

---

## Installation

### From the marketplace

Search for **RECALL Language** in the VS Code Extensions panel, or:

```sh
code --install-extension semanticintent.recall-language
```

### From source

```sh
git clone https://github.com/semanticintent/recall-vscode
cd recall-vscode
npm install
npm run build
```

Press `F5` in VS Code to launch an Extension Development Host with the extension loaded.

---

## Release notes

### 0.1.0

- Full TextMate grammar — all RECALL syntax constructs including AUDIT DIVISION
- LSP client wired to `@semanticintent/recall-lsp`
- Diagnostics, autocomplete, hover, go-to-definition, rename

---

## Related

| Repo | Description |
|---|---|
| [recall-compiler](https://github.com/semanticintent/recall-compiler) | The RECALL compiler — parser, type-checker, generator, CLI |
| [recall-lsp](https://github.com/semanticintent/recall-lsp) | The LSP server this extension uses |

---

## License

MIT © [semanticintent](https://github.com/semanticintent)
