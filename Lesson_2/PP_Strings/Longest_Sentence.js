function longestSentence(text) {
  let regX = /[a-z].*?[.!?]/gi;
  let result = text.match(regX).map((sent) => [sent.split(" ").length, sent])
      .sort().slice(-1)[0];
  
  console.log(`${result[1]}\n\nThe longest sentence has ${result[0]} word(s).`);
}
