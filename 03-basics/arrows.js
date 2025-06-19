const user = {
username: "hitesh", price: 999,
welcomeMessage: function () {
console.log('${this.username} , welcome to website'); console.log(this);
}
}
// user.welcomeMessage ()
// user.username = "sam"
// user.welcomeMessage ()
console.log(this); //output: {} but in browser console it will return Window
// cze window is an global object in browser

// function chai(){
// let username = "hitesh"
// console.log(this.username); // output: undefined
// }
// chai()

// const chai = function (){
// let username = "hitesh"
// console.log(this.username); // output: undefined
// }
// chai()

// const chai = () => {
// let username = "hitesh"
// console.log(this.username); // output: undefined
// }
// chai()

// const addtwo = (num, num2) => {
// return num1 + num2 }

const addTwo = (numi, num2) => (num1 + num2) // agr ek line ka code hai toh return aur brackets ki jarurt nahi hai
// and jo return krna hai usko parenthesis mee wrap krna hi pdega
// but { } ka use hua toh return likhna pdega
console.log(addTwo (3, 4))

