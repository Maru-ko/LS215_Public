const isItEven = (char, num) => num % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
const staggeredCase= str => str.split('').map((c, idx) => isItEven(c, idx)).join('');

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"