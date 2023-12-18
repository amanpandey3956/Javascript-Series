const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // add elements of dc_heros to marvel_heros but consider all values of dc_heros as a single indexed value and its o/p is like this [thor,ironman,spiderman,[values of dc_heros at index 3]]  

console.log(marvel_heros);
console.log(marvel_heros[3][2]); //gives the first value of index 3rd and its o/p - batman

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // gives o/p better than push method and o/p is like ["thor", "Ironman","spiderman","superman", "flash", "batman"]

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros); // another method just like concat we discussed above 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // sorted (another_array) into single array and gives o/p - [1,2,3,4,5,6,7,6,7,4,5]
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // check value is array or not and gives o/p in boolean value i.e true n false

console.log(Array.from("Hitesh")) // converts anything into array and gives o/p - ['H','i','t','e','s','h'] 
console.log(Array.from({name: "hitesh"})) // interesting but cover on later its o/p is - []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns new array from above set of elements