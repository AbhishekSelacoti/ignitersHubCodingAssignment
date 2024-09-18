console.log('JS LOADED');

import fs from 'node:fs';
import { evaluate } from 'mathjs';

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const arrayOfStrings = data.split("\n");

  for (let str of arrayOfStrings) {
    let expressionArray = str.split("=")[0];
    // expressionArray = expressionArray.replace(/–/g, '-'); this is interseting this is en dash,I encountered this issue since I copy pasted the input from the assignment
    str += " " + evaluate(expressionArray) + "\n";

    fs.appendFile('output.txt', str, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("File written Successfully");
      }
    });
  }
});
