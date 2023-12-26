// detailed discussion on for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
} ) // syntax and method to write for each loop in array , we can choose any other names instead (val)

// **********************************************************************************

// for each in arrow function

coding.forEach( (item) => {
   console.log(item);
} )

//************************************************************************************

// we can write function seperate unlike upper one examples

function printMe(item){
     console.log(item);
}

coding.forEach(printMe)

// ************************************************************************************

coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
} )

// ************************************************************************************

// array ke andar object rha toh uske properties ko aise print kar sakte hain 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// o/p - javascript , java , python