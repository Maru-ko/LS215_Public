/*

/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i

*/
function isValidEmail(str) {
  let preCheck = str.match(/[a-z0-9]+@{1}[a-z]+\.{1}.+/gi);
  console.log('P: ',preCheck,'str: ', str);
  if (!Array.isArray(preCheck) || preCheck[0].length !== str.length) return false;

  return true; 
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false