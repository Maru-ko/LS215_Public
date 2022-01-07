function staggeredCase(str) {
  const holyDiver = holyCow(0);
  return [...str].map(holyDiver).join('');
}

function holyCow(num) {
  let counter = num;
  return function holyCannoli(char) {
    if (/[a-z]/i.test(char)) counter += 1;
    return counter % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
  }
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

console.log(staggeredCase('I Love Launch School!') ===  "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') ===  "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') ===  "IgNoRe 77 ThE 444 nUmBeRs");