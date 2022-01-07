function swapCase(str) {
  let result = '';
  for (let char of str) char.toUpperCase() === char ? result += char.toLowerCase() : result += char.toUpperCase();
  return result;
}

console.log(swapCase('CamelCase') === "cAMELcASE");
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");