import { TokenStream, CharStreams, Lexer, CommonTokenStream, Parser } from 'antlr4';
import { PostgreSQLLexer } from '../__generated__/PostgreSQLLexer';
import { PostgreSQLParser } from '../__generated__/PostgreSQLParser';
import { Createfunc_opt_listContext, Createfunc_opt_itemContext, SconstContext } from '../__generated__/PostgreSQLParser';

export abstract class PostgreSQLParserBase extends Parser {
    constructor(input: TokenStream) {
        super(input);
    }

    GetParsedSqlTree(script: string, line: number) {
        const ph = this.getPostgreSQLParser(script);
        const result = ph.root();
        return result;
    }

    ParseRoutineBody(_localctx: Createfunc_opt_listContext): void {
        let lang: string | null = null;
      
        for (const coi of _localctx.createfunc_opt_item_list()) {
            if (coi.LANGUAGE() !== null) {
                if (coi.nonreservedword_or_sconst() !== null) {
                    if (coi.nonreservedword_or_sconst().nonreservedword() !== null) {
                        if (coi.nonreservedword_or_sconst().nonreservedword().identifier() !== null) {
                            if (coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier() !== null) {
                                lang = coi.nonreservedword_or_sconst().nonreservedword().identifier().Identifier().getText();
                                break;
                            }
                        }
                    }
                }
            }
        }

        if (lang === null) return;

        let func_as: Createfunc_opt_itemContext | null = null;
        for (const a of _localctx.createfunc_opt_item_list()) {
            if (a.func_as() !== null) {
                func_as = a;
                break;
            }
        }

        if (func_as !== null) {
            const txt = this.GetRoutineBodyString(func_as.func_as().sconst(0));
            const ph = this.getPostgreSQLParser(txt);

            switch (lang) {
                case 'plpgsql':
                    func_as.func_as().Definition = ph.plsqlroot();
                    break;
                case 'sql':
                    func_as.func_as().Definition = ph.root();
                    break;
            }
        }
    }

    private TrimQuotes(s: string | null): string {
        // @ts-ignore
        return s === null || s.length === 0 ? s : s.substring(1, s.length - 1);
    }

    unquote(s: string): string {
        const slength = s.length;
        const r: string[] = [];
        let i = 0;

        while (i < slength) {
            const c = s.charAt(i);
            r.push(c);
            if (c === "'" && i < slength - 1 && s.charAt(i + 1) === "'") {
                i++;
            }
            i++;
        }

        return r.join('');
    }

    GetRoutineBodyString(rule: SconstContext): string {
        const anysconst = rule.anysconst();

        const StringConstant = anysconst.StringConstant();
        if (StringConstant !== null) {
            return this.unquote(this.TrimQuotes(StringConstant.getText()));
        }

        const UnicodeEscapeStringConstant = anysconst.UnicodeEscapeStringConstant();
        if (UnicodeEscapeStringConstant !== null) {
            return this.TrimQuotes(UnicodeEscapeStringConstant.getText());
        }

        const EscapeStringConstant = anysconst.EscapeStringConstant();
        if (EscapeStringConstant !== null) {
            return this.TrimQuotes(EscapeStringConstant.getText());
        }

        let result = '';
        const dollartext = anysconst.DollarText_list();

        for (const s of dollartext) {
            result += s.getText();
        }

        return result;
    }

    getPostgreSQLParser(script: string): PostgreSQLParser {
        const charStream = CharStreams.fromString(script);
        const lexer = new PostgreSQLLexer(charStream);
        const tokens = new CommonTokenStream(lexer);
        const parser = new PostgreSQLParser(tokens);

        // Will add these back soon..
        // lexer.removeErrorListeners();
        // parser.removeErrorListeners();

        // const listenerLexer = new LexerDispatchingErrorListener(lexer);
        // const listenerParser = new ParserDispatchingErrorListener(this);

        // lexer.addErrorListener(listenerLexer);
        // parser.addErrorListener(listenerParser);

        return parser;
    }
}
