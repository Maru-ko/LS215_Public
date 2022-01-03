const leadingSubstrings = str => [...str].map((_, idx) => str.slice(0, idx + 1));

function substrings(str) {
  let result = [];
  [str].forEach((c, idx) => result.push(leadingSubstrings(str.slice(idx))));

  return result;
}

const leadingSubstrings = str => [...str].map((_, idx) => str.slice(0, idx + 1));
const substrings = str => [...str].map((_, idx) => leadingSubstrings(str.slice(idx))).flat();

console.log(substrings('abcde'));