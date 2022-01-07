let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

/*

sentences end with:   . ! ? 
sentences start with: [a-z]


Log: longest sentence, word count
*/

// function longestSentence(text) {
//   let sentences = text.split(/\.|\!|\?/);
//   let result = sentences.filter(s => s !== '').map(sent => {
//     let sentence = sent.trim().split(' ');  
//     return [sentence.length, sent];
//   });
  
//   return result.sort().slice(-1);
// }

// function longestSentence(text) {
//   let sentences = text.split(/\.|\!|\?/);
//   let result = sentences.filter(s => s !== '').map(sent => {
//     let sentence = sent.trim().split(' ');  
//     return [sentence.length, sent];
//   });
  
//   return result.sort().slice(-1);
// }

// function longestSentence(text) {
//   let result = text.match(/\w.*?[.!?]/g).map(sent => {
//     let sentence = sent.split(' ');  
//     return [sentence.length, sent];
//   });
  
//   //let result = text.match(/\w.*?[.!?]/g);
  
//   return result.sort().slice(-1);
// }





function longestSentence(text) {
  let result = text.match(/\w.*?[.!?]/g).map(sent => {
    let sentence = sent.split(' ');  
    return [sentence.length, sent];
  }).sort().slice(-1)[0];
  
  //let result = text.match(/\w.*?[.!?]/g);
  
  // return result.sort().slice(-1);
  console.log(result[1]);
  console.log(`\nThe longest sentence has ${result[0]} word(s).`);
}







console.log(longestSentence(longText));




function longestSentence(text) {
  let regEx = /[a-z].*?[.!?]/gi;
  let result = text.match(regEx).map((s) => [s.split(" ").length, s]).sort().slice(-1)[0];
  
  console.log(`${result[1]}\n\nThe longest sentence has ${result[0]} word(s).`);
}


function longestSentence(text) {
  let regEx = /[a-z].*?[.!?]/gi;
  let result = text.match(regEx).map((sent) => [sent.split(" ").length, sent])
      .sort().slice(-1)[0];
  
  console.log(`${result[1]}\n\nThe longest sentence has ${result[0]} word(s).`);
}

console.log(longestSentence(longText));
















































