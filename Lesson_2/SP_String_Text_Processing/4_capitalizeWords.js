const capitalize = str => str.toUpperCase()[0] + str.toLowerCase().slice(1);
const wordCap = str => str.split(' ').map(capitalize).join(' ');

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'