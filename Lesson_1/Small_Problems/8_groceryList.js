function buyFruit(arr) {
  let result = [];
  rarr.forEach(inArr => {
    let word = inArr[0];
    let times = inArr[1];
    for (let i = 0; i < times; ++i) {
      result.push(word);
    }
  });

  return result;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]