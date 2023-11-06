import * as readline from 'readline';
import { CharStream, CommonTokenStream }  from 'antlr4';

import { PostgreSQLLexer } from './__generated__/PostgreSQLLexer';
import { PostgreSQLParser } from './__generated__/PostgreSQLParser'
import { PostgreSQLToKyselyVisitor } from './src/PostgreSQLToKyselyVisitor'

const visitor = new PostgreSQLToKyselyVisitor();

function convertSQLToKysely(inputSQL: string): string {
  const chars = new CharStream(inputSQL);
  const lexer = new PostgreSQLLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new PostgreSQLParser(tokens);
  const kyselyCode = visitor.visit(parser.simple_select_pramary());

  return kyselyCode
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function getUserInput() {
  rl.question('Enter SQL query: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      rl.close();
    } else {
      console.log('\n-------------\n\n')
      console.log(convertSQLToKysely(userInput.trim()))
      console.log('\n\n-------------')
      getUserInput();
    }
  });
}

getUserInput();