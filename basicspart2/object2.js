 //const tinderUser = new Object() // singleton object
/*const tinderUser = {} // another way to declare object but it is non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // this is the way of accessing each elements of object in nested loop check its output

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // method of concat but it will gives you value like array in array type
// const obj3 = Object.assign({}, obj1, obj2, obj4) // another method of concatenation 

const obj3 = {...obj1, ...obj2} // best and modern technique of concatenation 90% in use 

console.log(obj3);

// jab bhi database se user ki value aayegi toh vo array of object me aayegi like user1....usern 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // to get the value of user from 1st array e.g its email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives o/p of all keys 

console.log(Object.values(tinderUser)); // gives o/p of all values

console.log(Object.entries(tinderUser)); // gives o/p of combine or both key-value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // sometimes you ask the value which is not present in database which cause crash hence to avoid this condition simply we can ask to database using his method*/


// ****************** Object Destructuring ************************************************

const course = {
    course: "js in hindi",
    Price: "999",
    courseInstructor: "aman"

}
console.log(course.courseInstructor); // ye toh common method hai hi but its lengthy to write course.courseInstructor always hence we use object destructuring method so see below

const {courseInstructor: instructor} = course // we can also change name courseInstructor to instructor like this

// console.log(courseInstructor);
console.log(instructor);