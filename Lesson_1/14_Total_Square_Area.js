const totalArea = (arr) => arr.filter(x => (x[0] === x[1])).reduce((acc, inArr) => acc + inArr[0] * inArr[1], 0);

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 121