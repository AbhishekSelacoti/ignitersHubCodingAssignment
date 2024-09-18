import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter a Sentence: `, sentence => {
  let numberOfWords = 0;
  let reversedSentence = "";
  let modifiedSentence = "";

  numberOfWords = sentence.split(" ").length;

  reversedSentence = sentence.split(" ").reverse().join(" ");

  modifiedSentence = sentence.split(" ").join("-");
  console.log("Number of words:", numberOfWords);
  console.log("Reversed Sentence:", reversedSentence);
  console.log("Modified Sentence:", modifiedSentence);
  rl.close();
});
