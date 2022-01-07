function isBalanced(str) {
  let counter = 0;
  if (str.indexOf(`(`) > str.indexOf(')') || str.lastIndexOf('(') > str.lastIndexOf(')')) return false;
  [...str].forEach(l => l === '(' ? counter -= 1 : l === ')' ? counter += 1 : 'hey');
  return counter === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false