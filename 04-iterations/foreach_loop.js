const coding = ["js", "Iuby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
// console.log(item);
return item // output will be undefined
} )
// for each loop kuch bhi return nahi krta hai
console.log(values) ;

const newNums = myNums.filter( (num) =>{ // { } parenthesis lgaoge toh return krna pdta hai
    // ( (num) => num > 4) ek line ka code hai toh return krne ki jarurt nahi
return num > 4 } )
console. log(newNums);