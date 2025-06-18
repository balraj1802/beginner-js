const marvel_heros = ["thor", "Ironman" , "spiderman"]
const de_heros = ["superman","flash", "batman"]
marvel_heros.push(dc_heros)
console.log(marvel_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[31[1]);
const allHeroes =  marvel_heros.concat(dc_heros)
marvel_heros.concat(dc_heros)
console.log(marvel_heros);
const another_array = [1, 2, 3, 14, 5, 61, 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) 
// flat use kiya jata hai array k andr array ho toh ek hi array mee saare element hojae isiliye
// infinity ki jagah koi number de skte ho ki kinte dept tk same array mee krna hai
console.log(real_another_array) ;
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting
// it will return [] kyoki voh convert nahi kr paaya
let score1 = 100
let score2 = 200
let score3 = 300
console.log (Array.of(scorel, score2, score3));