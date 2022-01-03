const leadingSubstrings = str => [...str].map((_, idx) => str.slice(0, idx + 1));
const substrings = str => [...str].map((_, idx) => leadingSubstrings(str.slice(idx))).flat();
const isPalindrome = str => str.length > 1 && str === str.split('').reverse().join('');

const palindromes = str => substrings(str).filter(isPalindrome);

console.log(palindromes('hello-madam-did-madam-goodbye')); 