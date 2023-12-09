const myName = "aman";
const repo = 50;

// console.log(name + repo + " value"); old method or technique

console.log(`Hello my name is ${myName} and my repo count is ${repo}`);
// this is modern way called as string interpolation 

const gameName = new String("Aman-dev-hc") // another method of declaring string

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne = "   aman   " // for avoiding spaces
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aman.com/aman%20pandey"
console.log(url.replace('%20','-')); // for replacing unnecessary stuff from url
console.log(url.includes('aman')); // for checking elements of url

console.log(gameName.split('-')); // to convert string into array based on (-) or anything 













