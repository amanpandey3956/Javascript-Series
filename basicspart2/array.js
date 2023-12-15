// ************** All about arrays ************************
const myArr = [0,1,2,3,4,5]

// another way of declaring an array

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr[3]);

//  ************* Different Array methods ****************************

myArr.push(6) // it adds value at the end of an array
myArr.pop() // it removes the last value of an array 

myArr.unshift(9) // it adds value at start and shift all values to its next index
myArr.shift() // it simply removes the first indexed value

console.log(myArr.includes(9)); // it gives ans of questions like (9) is in array or not and gives ans in boolean i.e true/false

console.log(myArr.indexOf(3)); // returns index number if exist otherwise gives o/p (-1)

const newArr = myArr.join() // gives same array o/p but changes it into string when u checked its (type of) 

console.log(myArr);
console.log( newArr);

// slice, splice

// In this slice and splice concept within the array lets see whats happen 
// when you apply slice to (myn1) it gives o/p of index no 1,2 but doesn't includes index no.3 as you see below 
// but it doesn't affect the original array values i.e of (myArr) 
// but during splice method it includes start and end index value and also affect original array list like it removes splice o/p from original array i.e (myArr)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


