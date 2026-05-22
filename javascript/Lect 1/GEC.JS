//what is gec
/*GEC    stand for  Global excution context

in short bolu to jab bhi hum js code run karte hai to js engine do phase me code ko execute karta hai
1. Creation phase
2. Execution phase

1. Creation phase me js engine do cheeze karta hai
a. Global object create karta hai
b. this keyword ko set karta hai

2. Execution phase me js engine code ko line by line execute karta hai

Global object kya hota hai
Global object ek aisa object hota hai jisme hum apne variables aur functions ko store karte hai

this keyword kya hota hai
this keyword ek aisa keyword hota hai jo current execution context ko refer karta hai

Global execution context kya hota hai
Global execution context ek aisa execution context hota hai jo global scope me create hota hai jab bhi hum js code run karte hai

Global execution context ke andar humare variables aur functions store hote hai

Global execution context ke andar this keyword global object ko refer karta hai

Global execution context ke andar humare variables aur functions ko access kar sakte hai

Global execution context ke andar humare variables aur functions ko modify kar sakte hai

Global execution context ke andar humare variables aur functions ko delete kar sakte hai

Global execution context ke andar humare variables aur functions ko access karne ke liye hum global object ka use karte hai

Global execution context ke andar humare variables aur functions ko access karne ke liye hum this keyword ka use karte hai

var sum =() => {
    console.log("hello")
}
    sum() //hello

    es program main 2nd phase me code ko execute karta hai to sum function ko call karta hai to hello print hota hai

    sum()
    var sum =() => 
    {
        console.log("hello")
}
        //excution context
        /------------excution phase---------------------/
         sum function ko call karta hai to error aata hai
         error aata hai kyuki sum function ko call karne se pehle hi sum variable ko declare kiya gaya hai
         aur sum variable ko declare karne se pehle hi sum function ko call kiya gaya hai
         isliye error aata hai


         sum() //error
         var sum =() =>{
            log("ha")}

            //hoiesting
            var sum = undefined
            sum() //error
            sum =() =>{
                log("ha")}


                sum()
                let sum =() =>{
                    log("ha")}

                    //hoiesting
                    let sum = undefined
                    sum() //error
                    sum =() =>{
                        log("ha")}

                        sum() //error
                        //excution context ke andar let aur const variables ko hoiesting nahi hota hai
                        //isliye error aata hai