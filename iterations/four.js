// as we know object is not capable of iteration in for of loop but it is possible with for in loop

// for In loop in object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ****************************************************************************************

// for In loop in array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// ****************************************************************************************

// for In loop in Map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
     console.log(key);
}

// o/p - null or nothing bcoz Map is not iterable 

// ****************************************************************************************