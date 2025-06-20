const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) = { return num + 10})
const newNums = myNumers
 .map ( (num) => num * 10 )
 .map ( (num) => num + 1 )
 .filter( (num) => num >= 40)
 // this is called chaining ek k baad ek function pss kr skte hai
console.log(newNums); 

const arrayl = [1, 2, 3, 4];
1/0+1+2+3+4
const initialValue = 0;
const sumWithInitial = arrayl.reduce (
(accumulator, currentValue) => accumulator + currentValue,
initialValue
) ;
console.log (sumWithInitial);
// Expected output: 10

const myNums = [1, 2, 3]
// const myTotal = myNums. reduce(function (acc, currval) { 
//     console.log('acc: ${acc} and currval: ${currval}');
// return acc + currval
// }, 0)
// console.log(myTotal);

const myTotal = myNums.reduce ( (acc, curr) => acc+curr, 0)
console.log(myTotal);