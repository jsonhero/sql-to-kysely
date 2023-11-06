Work in progress.

Parses SQL code and converts it to [Kysely](https://kysely.dev/) programmatic builder code.



![example](https://i.gyazo.com/64bcb0277366990e641228f35fa21d01.gif)


**Tooling**

Antlr AST visualizer:

```
antlr4-parse PostgreSQLParser.g4 PostgreSQLLexer.g4 stmt -gui
```

VSCode for Antlr:
https://github.com/mike-lischke/vscode-antlr4