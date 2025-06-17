/*Primitive DataType
 7 Types: 1. String 
          2. Number 
          3. Boolean
          4. Symbol
          5. Undefined
          6. Null
          7. BigInt */
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId); // it will return false symbols will be different for both the Ids

/* Reference (Non-Primitive) 
 Array, object, functions */

 const hero = ["Eren" , "Mikasha" , "Edwin"];
 let myOdj = {
    name: "balraj",
    age: 22,
 }

 const myFunction = function(){
    console.log("hello world")
 }
