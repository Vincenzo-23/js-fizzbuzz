console.log("inizio FizzBuzz")

//stampare in console i numeri da 1 a 10
let n = 100

for(let i = 0; i < n; i++){
    let num = i + 1
    // console.log(num)
    
    //dichiaro le variabili alle quali assegno rispettivamente i valori: num % 3 e num % 5
    let module3 = num % 3
    
    let module5 = num % 5

    
    if(module3 == 0 && module5 == 0){
        //stampare la parola "FizzBuzz" al posto dei numeri, se i numeri sono sia multipli di 3 sia multipli di 5
        console.log("FizzBuzz")
    }else if(module3 == 0){
        //stampare la parola "Fizz" al posto dei numeri, se i numeri sono multipli di 3
        console.log("Fizz")
    }else if(module5 === 0){
        //stampare la parola "Buzz" al posto dei numeri, se i numeri sono multipli di 5
        console.log("Buzz")
    }else{
        //stampare normalmente i numeri che non sono né multipli di 3, né multipli di 5
        console.log(num)
    }
    
}