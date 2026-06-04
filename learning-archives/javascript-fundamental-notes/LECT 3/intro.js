/*aaj array aur unke inbuilt methods ke baare me padhenge

let arr = [1,2,3,4,5]
arr.push(6) //push method array ke end me element add karta hai

console.log(arr) //[1,2,3,4,5,6]
arr.pop() //pop method array ke end se element remove karta hai

console.log(arr) //[1,2,3,4,5]
arr.unshift(0) //unshift method array ke start me element add karta hai

console.log(arr) //[0,1,2,3,4,5]
arr.shift() //shift method array ke start se element remove karta hai

console.log(arr) //[1,2,3,4,5]
arr.splice(2,1) //splice method array ke kisi bhi index se element remove karta hai

console.log(arr) //[1,2,4,5]
arr.splice(2,0,3) //splice method array ke kisi bhi index par element add karta hai

console.log(arr) //[1,2,3,4,5]
arr.indexof(3) //indexof method array ke kisi bhi element ka index return karta hai

console.log(arr.indexof(3)) //2
arr.includes(3) //includes method array ke kisi bhi element ko check karta hai ki wo array me hai ya nahi

console.log(arr.includes(3)) //true
arr.slice(1,4) //slice method array ke kisi bhi index se kisi bhi index tak ke elements ko return karta hai

console.log(arr.slice(1,4)) //[2,3,4]
arr.concat([6,7,8]) //concat method array ke end me kisi bhi array ko add karta hai

console.log(arr.concat([6,7,8])) //[1,2,3,4,5,6,7,8]
arr.join("-") //join method array ke elements ko kisi bhi separator se join karta hai

console.log(arr.join("-")) //1-2-3-4-5
arr.reverse() //reverse method array ke elements ko reverse karta hai

console.log(arr.reverse()) //[5,4,3,2,1]
arr.sort() //sort method array ke elements ko sort karta hai

console.log(arr.sort()) //[1,2,3,4,5]
arr.sort((a,b) => b-a) //sort method array ke elements ko descending order me sort karta hai


arr.forEach() //forEach method array ke har element par ek function call karta hai

arr.map() //map method array ke har element par ek function call karta hai aur ek naya array return karta hai

arr.find() //find method array ke har element par ek function call karta hai aur pehla element return karta hai jo function me condition ko satisfy karta hai

exmaple

let arr = [1, 2, 3, 4,a){
    return a>3
}
console.log(data) //4

possible output
4
possible error
data is not defined 
but data is not defined error aayega kyuki find method array ke har element par function call karta hai aur pehla element return karta hai jo function me condition ko satisfy karta hai
to data variable ko find method ke andar declare nahi kiya gaya hai isliye error aayega


let map = arr.map((a,b,c) => {
    //console.log(c) //array
    return a*2
})
console.log(map) //[2,4,6,8,10]
// map main possible error ho sakte hai ki map method array ke har element par function call karta hai aur ek naya array return karta hai to agar hum map method ke andar function me return statement nahi likhenge to map method undefined return karega to map variable me undefined store hoga


// filter function

filter function ka kam array ke har element par ek function call karna hai aur ek naya array return karna hai jisme wo elements honge jo function me condition ko satisfy karte honge

example

let arr = [1, 2, 3, 4, 5]
let filter = arr.filter((a) => {
    return a>3
})
console.log(filter) //[4,5]
// filter main possible error ho sakte hai ki filter method array ke har element par function call karta hai aur ek naya array return karta hai to agar hum filter method ke andar function me return statement nahi likhenge to filter method undefined return karega to filter variable me undefined store hogaconsole.log("");