const sum = num => String(num).split('').reduce((acc, n) => acc + Number(n), 0);

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45