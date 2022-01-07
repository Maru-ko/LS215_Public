function thirt(n) {
  let sequence = getSequence(n);
  let stationaryNumsArr = [];
  let currStationary = getStationaryNum(n, sequence);
  
  while (!stationaryNumsArr.includes(currStationary)) {
    stationaryNumsArr.push(currStationary);
    currStationary = getStationaryNum(currStationary, sequence);
  }
  console.log(stationaryNumsArr);
  return currStationary;
};

function getSequence(n) {
  const refMod13Sequence = [1, 10,  9, 12, 3,  4];
  let sequence = [];
  let idx = 0;
  
  while (sequence.length < String(n).length) {
    sequence.push(refMod13Sequence[idx])
    if (idx === (refMod13Sequence.length - 1)) {
      idx = 0
    } else {
      idx += 1;
    }
  };
  
  return sequence;
};

function getStationaryNum(n, seq) {
  let nRevArr = String(n).split('').reverse();
  let stationaryNum = nRevArr.map((digit, idx) => Number(digit) * seq[idx])
                             .reduce((sum, cv) => sum + cv);
  return stationaryNum;
};

console.log(thirt(939897969594939291)); // 75
// console.log(thirt(1234567)); // 87
// console.log(thirt(321)); // 48