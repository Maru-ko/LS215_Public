function luhnCheck(str) {
  let nums = (str.match(/\d/g) || []).reverse();
  if (nums.length < 2) return false;
  
  return (nums.reduce((acc, n, i) => acc + doubler(n, i), 0)) % 10 === 0;
}

function doubler(str, idx) {
  let num = Number(str);
  if (idx % 2 === 1) num *= 2;
  
  return num < 10 ? num : num - 9;
}

console.log(luhnCheck('1'));
console.log(luhnCheck(''));
console.log(luhnCheck('supercalifrajilistikexpialadocious'));
console.log(luhnCheck('11'));
console.log(luhnCheck('1111'));
console.log('check:');
console.log(luhnCheck('8763'));
console.log(luhnCheck('2323 2005 7766 3554'));
console.log(luhnCheck('2121'));
console.log(luhnCheck('9191'));
console.log(luhnCheck('2323 2005 7766 355'));
console.log(luhnCheck('2324'));
console.log(luhnCheck('2323 2005 7766 3554'));
console.log(luhnCheck('2323/2005 7766,3554'));
// console.log(doubler('8'));

/*

1. from highest index to lowest:
        - every 2ND digit (NUM times 2)
        - if every number doubled > 10 then deduct -9 from it
        - reduce it to one value - meaning add all the single digits

input String? Number?

assuming it is either we can either convert the number into string or start form here:

1. separate all the numbers individually (1134) => 1 1 3 4 not 11 34 etc
  A. extract all single string digits  (/\d/g)
2. reverse the order - why? in order to be more thorough, otherwise loop in reverse
  B. reverse the extracted digits order
3. every 'even' aka odd index *2
      - we need a way to check if its over 10 [extra method that checks for this and return approrpoat]
            functin doubler ( doubles nums or returns correct)
  C. transform every value into what is required;
    first ->(num*2), the if result < 10 keep it, if result > 10 (deduct 9)

4. we have an array of single digit numbers -> reduce to a SINGLE VALUE

5. check if %10 or last digit is -> 0, if it is return true, else FALSE


100

9191
    
2121
*/