// for of
// ["","",""]
// [{},{},{}]
const arr = [1, 2, 3, 4, 5]

for (const num of arr) { 
    console.log(num);
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FI', "France")

console.log(map);

for (const [key, value] of map) {
console.log(key, ':-', value);
}
const myobject = {
'game1': 'NFS',
'game2': 'Spiderman'
}

// for (const [key, value] of myobject) {  // ye iterable nahi hota map ki tarah isko iterate krne k liye dusre methods hai
// console.log(key, ':-', value);          // we can use for_in loops
// }

const myobject = {
js: 'javascript',
cpp: 'C++',
Ib: "ruby",
swift: "swift by apple"
}
for (const key in myobject) {
console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for_of loop mee key ki value print krta hai aur for_in loop mee key ki value print hoti hai

const coding = ["js", "ruby"
, "java", "python", "срр"]
coding.forEach ( function (val){ // for each mee voh har ek value pr jaega 
// jisko hmne val declare kr rkha hai aur function ka kaam krega jo function usko krne ko kahega
console.log(val);
} )

function printMe(item){
console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
console.log(item,index, arr);
})