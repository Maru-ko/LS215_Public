const gClause = str => /[^0-9.]/.test(str);
const dotCheck = str => str.match(/\./g)?.length >= str.match(/\d/g)?.length;

function compareVersions(v1, v2) {
  if (gClause(v1) || gClause(v2)) return null;    
  if (dotCheck(v1) || dotCheck(v2)) return null;
  let max = Math.max(v1.split('.').length, v2.split('.').length);  
  let arrV1 = padder(v1, max).split('.');
  let arrV2 = padder(v2, max).split('.');
  let v1Count = 0;
  let v2Count = 0;

  for (let i = 0; i < max; ++i) {
    let x = +(arrV1[i]);
    let y = +(arrV2[i]);
   x > y ? v1Count += 1 : x < y ? v2Count += 1 : 'hi';
  }
  
  return v1Count > v2Count ? 1 : v1Count < v2Count ? -1 : 0;
}

function padder(str, max) {
  let rounds = max - (str.split('.').length);
  for (let i = 0; i < rounds; ++i) str += '.0'
  return str;
}

let a = '1.2.0.0';
let b = '1.18.2';

console.log(compareVersions(a, b));
console.log(compareVersions('1.18.2', '13.37'));
console.log(compareVersions('0.1', '1'));
console.log(compareVersions('1', '1.0'));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
 
console.log(padder('13.37', 3));

