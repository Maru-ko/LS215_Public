function multiplyAllPairs(arrX, arrY) {
  let result = [];
  arrX.forEach(paper => arrY.forEach(rock => result.push(paper * rock)));
  return result.sort((x, y) => x > y ? 1 : x < y ? -1 : 0);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]