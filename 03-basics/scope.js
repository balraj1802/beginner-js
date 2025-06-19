var c = 300

if (true){
let a = 10
const b = 20
var c = 30
}
//console.log(a); output: a not declared
//console.log(b); output: b not declared
console.log(c); // is case mee output 30 ajaega
// isiliye var ka use nai krte mostly

function one(){
const username = "hitesh"
function two(){
const website = "youtube"
console.log (username);
}
// console.log(website);
two()
}
one()

if (true) {
const username = "hitesh"
if (username === "hitesh") {
const website = " youtube"
console.log(username + website);
}
// console.log(website);
}
// console. log (username);
console.log(addone(5)) // yha execute hojaega
function addone (num){
return num + 1
}
addTwo (5) // yha pr problem aaegi
const addTwo = function (num){
return num + 2
}
