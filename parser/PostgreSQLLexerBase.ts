import { CharStream, Lexer } from "antlr4";
import { PostgreSQLParser } from "./PostgreSQLParser";

function isLetter(str: string) {
    return str.length === 1 && str.match(/[a-z]/i);
}

export abstract class PostgreSQLLexerBase extends Lexer {
    protected tags: string[] = [];

    constructor(input: CharStream) {
        super(input)
    }

    pushTag() {
        this.tags.push(this.text);
    }

    isTag() {
        return this.text === this.tags[this.tags.length - 1];
    }

    popTag() {
        this.tags.pop();
    }

    getInputStream() {
        return this._input;
    }

    checkLA(c: number) {
        return this.getInputStream().LA(1) !== c;
    }

    charIsLetter() {
        return isLetter(this.getInputStream().LA(-1).toString());
    }

    handleNumericFail() {
        this.getInputStream().seek(this.getInputStream().index - 2);
        this._type = PostgreSQLParser.Integral;
    }

    handleLessLessGreaterGreater() {
        if (this.text === '<<') this._type = PostgreSQLParser.LESS_LESS;
        if (this.text === '>>') this._type = PostgreSQLParser.GREATER_GREATER;
    }

    unterminatedBlockCommentDebugAssert() {
        // Debug.Assert(this.getInputStream().LA(1) === -1 /*EOF*/);
    }

    checkIfUtf32Letter() {
        let codePoint = (this.getInputStream().LA(-2) << 8) + this.getInputStream().LA(-1);
        let c: string[];
        if (codePoint < 0x10000) {
            c = [String.fromCharCode(codePoint)];
        } else {
            codePoint -= 0x10000;
            c = [
                String.fromCharCode((codePoint / 0x400) + 0xd800),
                String.fromCharCode((codePoint % 0x400) + 0xdc00)
            ];
        }
        return isLetter(c[0]);
    }
}