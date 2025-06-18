// singleton
// Object.create
// object literals
const mySum = Symbol("key1")
const JsUser = {
name: "Hitesh",
"Full name": "Hitesh Choudhary", 
[mySum]: "mykey1", // symbol ki tarh represent krna hai toh "[ ]" k 
// andr rkhna pdega uss symbol wale varialble ko
age: 18, 
location: "Jaipur", 
email: "hitesh@google.com", 
isLoggedIn: false, 
lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "balraj@chatgpt.com" // if you want to change the variable content inside object
Object.freeze(JsUser) // iske baad changes nahi kr paaoge
console.log(JsUser)

JsUser.greeting = function(){
console.log ("Hello JS user");
}
JsUser.greetingTwo = function (){
console.log(`Hello JS user, ${this. name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2) // for combining multiple objects to target object
console.log(obj3);

const obj4 = {...obj1, ...obj2} // using " ... " we can spread the object like droping a kanch ka glass on the ground
//console.log(Object.keys(tinderUser)); tinderUser naam k objects ki keys ka output dega
//console.log(Object.values(tinderUser)); isme unki values ki
//console.log(Object.entries(tinderUser)); -> key with values k arrays dega in form of an array
// aur ye sb in form of an array dega

const course = {
coursename: "js in hindi", 
price: "999", 
courseInstructor: "hitesh"
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor : khudkanaam} = course
console.log(khudkanaam);
