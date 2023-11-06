import * as readline from 'readline';
import { CharStream, CommonTokenStream }  from 'antlr4';

import { PostgreSQLLexer } from './__generated__/PostgreSQLLexer';
import { PostgreSQLParser } from './__generated__/PostgreSQLParser'
import { PostgreSQLToKyselyVisitor } from './src/PostgreSQLToKyselyVisitor'
import { ChildProcessWithoutNullStreams, spawn, spawnSync } from 'child_process'

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

let childProcess: ChildProcessWithoutNullStreams

function getUserInput() {
  rl.question('Enter SQL query: ', (userInput) => {
    if (userInput.toLowerCase() === 'exit') {
      childProcess?.kill()
      rl.close();
    } else {    
      if (childProcess !== undefined) {
        childProcess.kill('SIGINT')
      }
      const _input = userInput.trim()

      try {
        const kyselyCode = convertSQLToKysely(_input)
        console.log('\n-------------\n\n')
        console.log(kyselyCode)
        console.log('\n\n-------------')
        
        // Spawns GUI for visualizing the parsed AST of the provided query
        childProcess = spawn('antlr4-parse', ['PostgreSQLParser.g4', 'PostgreSQLLexer.g4', 'stmt', '-gui']);
        childProcess.on('spawn', () => {
          console.log('\n.... spawning GUI \n')
          childProcess.stdin.write(_input)
          childProcess.stdin.write('\n')
          setTimeout(() => {
            childProcess.stdin.end()
            getUserInput();
          }, 100)
        }) 
      } catch (err) {
        console.log("bad query... try again")
        getUserInput()
      }     
    }
  });
}

getUserInput()