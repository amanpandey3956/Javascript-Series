const score  = 100; // declaring a number 
console.log(score);

const balance = new Number(100.5851) //strictly declaring a number 
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // no need of 'en-IN' this it automatically converts it into indian stds

// ******************* Maths ******************************************************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,9,2));
console.log(Math.max(4,6,9,2));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min +1) +min));


