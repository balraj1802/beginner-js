const gameName = new String ('hitesh-hc')
// console. log (gameName [01);
// console. log (gameName._proto_);
// console. log (gameName.length);
// console. log (gameName.toUpperCase());
console. log (gameName.charAt (2));
console. log (gameName. indexOf('t'));
const newString = gameName. substring (0, 4)
console. log (newString);
const anotherString = gameName. slice (-8, 4)
console. log (anotherString);
const newStringOne = "  hitesh  "
console. log (newStringOne);
console. log (newStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary"
console. log (url. replace ('&20', '-')) // to replace a word with another word we use replace
console. log (url. includes ('sundar') )
console.log (gameName.split('-')) // jaha jaha pr bhi sperator " - " in our case hoga 
// uske basis pr strings ko seprate krdega split function
/* follow the " ` ` " wala syntax in which if you want to add a varialble
 in between the string than add "${ add here }" */