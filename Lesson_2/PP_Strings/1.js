let firstName = "Maruko";
let lastName = 'Desu';

let fullName = `${firstName} ${lastName}`;

console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

let language = 'JavaScript';

let idx = language.indexOf('S');

console.log(idx);

let charCode = language.charCodeAt(idx);

console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

let pi = 22/7;
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

let boxNumber = (356).toString();

console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);

console.log(typeof boxNumber);

let name = prompt('What is your name? ');
let greeting = `Hello ${name}.`;
if (name.endsWith('!')) {
  console.log(greeting.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else {
  console.log(greeting);
}

let name = prompt('What is your name? ');
let greeting = `Hello ${name}.`;
if (name.endsWith('!')) {
  console.log(greeting.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else {
  console.log(greeting);
}
