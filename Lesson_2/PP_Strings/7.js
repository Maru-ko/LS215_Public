let name = prompt('What is your name? ');
let greeting = `Hello ${name}.`;
if (name.endsWith('!')) {
  console.log(greeting.toUpperCase() + ' WHY ARE WE SCREAMING?');
} else {
  console.log(greeting);
}