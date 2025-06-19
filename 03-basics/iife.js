// Immediately Invoked Function Expressions (IIFE)
(function chail(){
    // this function is an Names IIFE
console. log(`DB CONNECTED`) ;
})(); // ; se iska execution rukega aur last wale () ka mtlb hai execute krna

( (name) => { // this an unamed IIFE
    console.log(`DB Connected`) 
})('balraj'); 

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20