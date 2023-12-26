// for of loop

// ["", "", ""]
// [{}, {}, {}]

// for of loop in array 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// **************************************************************************************

// for of loop in string

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// **************************************************************************************

// for of loop in Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// ************************************************************************************

// for of loop in object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
     console.log(key, ':-', value);
    
} // o/p - myObject is not iterable 

// so the conclusion is (for of) loop works on array , strings , Map , but not works on object 

// ***********************************end*************************************************