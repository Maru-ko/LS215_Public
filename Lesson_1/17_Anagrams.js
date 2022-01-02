const splitter = str => str.split('').sort().join('');

const anagram = (word, arr) => arr.filter(str => splitter(word) === splitter(str));

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); 