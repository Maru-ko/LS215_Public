const gClause = str => /[^0-9.]/.test(str);

const dotCheck = str => str.match(/\./g) >= str.match(/\d/g);

function compareVersions(v1, v2) {
  if (gClause(v1) || gClause(v2)) return null;    
  if (dotCheck(v1) || dotCheck(v2)) return null;

  let arrV1 = v1.split('.');
  let arrV2 = v2.split('.');
  
  let v1Count = 0;
  let v2Count = 0;
  
  let rounds = Math.min(arrV1.length, arrV2.length);
  
  for (let i = 0; i < rounds; ++i) {
    let x = arrV1[i];
    let y = arrV2[i];
   if (x > y) {
     v1Count += 1;
   } else if (x < y) {
     v2Count += 2;
   }
  }
  
  return v1Count > v2Count ? 1 : v1Count < v2Count ? -1 : 0;
}


let a = '1.2.0.0';
let b = '1.18.2';

console.log(compareVersions(a, b));
console.log(compareVersions('1.18.2', '13.37'));
console.log(compareVersions('0.1', '1'));
console.log(compareVersions('1', '1.0'));