// for of loop on array
const arr = [1, 2, 3, 4, 5];

for (const num of arr) { 
    console.log(num);
}

// for of loop on string
const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FI', "France");

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    Ib: "ruby",
    swift: "swift by apple"
}

// for (const [key, value] of myObject) {  
// ❌ ye iterable nahi hota map ki tarah — isko iterate karne ke liye dusre methods hain
// ✅ we can use for_in loop
// console.log(key, ':-', value);
// }

// for_in loop on object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// 🔁 for_of loop array pe use hota hai aur value deta hai
// 🔁 for_in loop object pe use hota hai aur key deta hai

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
    // forEach mein voh har ek value par jaega 
    // jisko humne 'val' declare kar rakha hai 
    // aur function ka kaam karega jo hum usko denge
    console.log(val);
});

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);  // reusable function diya forEach ko

coding.forEach((item, index, arr) => {
    // forEach ke callback mein:
    // item → current value
    // index → uska index
    // arr → pura array
    console.log(item, index, arr);
});
