const BAD_NUM = '0000000000'
function numberClean(str) {
  let strNums = str.match(/\d/g);
  if (badNumber(strNums)) return BAD_NUM;
  let result = strNums.join('');
  
  return result.length === 11 ? result.slice(1) : result;
}

function badNumber(str) {
  let size = str.length;
  if (size > 11) return true;
  if (size < 10) return true;
  if (size === 11 && str[0] !== '1') return true;
  
  return false;
}

console.log(numberClean('1-555-687-5309'));
console.log(numberClean('555-687-5309'));
console.log(numberClean('555-687-5309'));
console.log(numberClean('555-687-530923'));
console.log(numberClean('30923'));

/*
make a constanct BAD NUMBER equal to 10 zero string '0000000000'

1 extract the individual string digits, not compoung IE '23-99-500' -> 2 3 9 9 5 0 0 not 23 99 500
      - regex \d+ or \d g
2. if length of extracted digits is < 10 return BAD NUMBER || > 11 tres bad
[-> 4. if length === 11 && [0] === '1' it's good -> use slice(1---last), ignore the first - remove first appearance of '1'
            /1/g, ''
[-> 3. if lengh === 10 -> GOOD
    - if length is > 11 c'est tres bad

5. go back to 4

6. go back to 2


https://app.coderpad.io/XD4CYCZ3
*/