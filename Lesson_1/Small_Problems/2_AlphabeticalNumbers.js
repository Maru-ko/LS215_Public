let strNumbers = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';

const STRNUMS = strNumbers.replace(/\,/g, '').split(' ')//.map((word, idx) => [word, idx])//.sort((x, y) => x[0] < y[0]);

const wordNumSorter = (x, y) => STRNUMS[x] > STRNUMS[y] ? 1 : STRNUMS[x] < STRNUMS[y] ? -1 : 0;

const alphabeticNumberSort = arr => arr.slice().sort(wordNumSorter);

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log(alphabeticNumberSort(array));
console.log(array);

//

