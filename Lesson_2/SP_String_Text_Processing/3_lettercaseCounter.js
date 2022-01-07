function letterCaseCount(str) {
  const resultObj = {};
  resultObj.lowerCase = (str.match(/[a-z]/g) || []).length;
  resultObj.upperCase = (str.match(/[A-Z]/g) || []).length;
  resultObj.neither = (str.match(/[^a-z]/gi) || []).length;
  
  return resultObj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }