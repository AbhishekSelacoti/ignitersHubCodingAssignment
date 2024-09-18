import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter a string: `, str => {
  let output = "not a palindrome";

  for (let character of str) {
    const reversedString = str.split("").reverse().join("");
    if (reversedString === str) {
      output = "a palindrome";
    }
  }
  console.log("The String \'", str, "\' is", output);
  rl.close();
});
