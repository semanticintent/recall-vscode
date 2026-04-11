// ─────────────────────────────────────────────────────────
// RECALL VS Code Extension — LSP client activation
// ─────────────────────────────────────────────────────────

import * as path from 'path'
import { ExtensionContext, workspace } from 'vscode'
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from 'vscode-languageclient/node'

let client: LanguageClient | undefined

export function activate(context: ExtensionContext): void {
  // Path to the LSP server — installed as a node_modules dep
  const serverModule = context.asAbsolutePath(
    path.join('node_modules', '@semanticintent', 'recall-lsp', 'dist', 'server.js')
  )

  const serverOptions: ServerOptions = {
    run: {
      module:    serverModule,
      transport: TransportKind.ipc,
    },
    debug: {
      module:    serverModule,
      transport: TransportKind.ipc,
      options:   { execArgv: ['--nolazy', '--inspect=6009'] },
    },
  }

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'rcl' }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/*.rcl'),
    },
  }

  client = new LanguageClient(
    'recallLanguageServer',
    'RECALL Language Server',
    serverOptions,
    clientOptions,
  )

  client.start()
  context.subscriptions.push({ dispose: () => client?.stop() })
}

export function deactivate(): Thenable<void> | undefined {
  return client?.stop()
}
