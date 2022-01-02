const octalToDecimal = numStr => numStr.split('').reduce((acc, str, idx) => acc + (Number(str) * 8 ** ((numStr.length - 1) - idx)), 0);

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));  