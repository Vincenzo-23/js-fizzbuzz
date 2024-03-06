console.log("inizio FizzBuzz")

//stampare in console i numeri da 1 a 10
let n = 100; //number

//dichiaro la variabile ulBox con valore relativo all'ul nel DOM
const ulBox = document.querySelector(".box")
// console.log(ulBox)


for(let i = 0; i < n; i++){
    let num = i + 1; //number
    
    //dichiaro le variabili alle quali assegno rispettivamente i valori: num % 3 e num % 5
    let module3 = num % 3 // number
    
    let module5 = num % 5 // number

    
    if(module3 == 0 && module5 == 0){
        //stampare in console la parola "FizzBuzz" al posto dei numeri, se i numeri sono sia multipli di 3 sia multipli di 5
        console.log("FizzBuzz")
        //stampare nella pagina la parola "FizzBuzz" al posto dei numeri, se i numeri sono sia multipli di 3 sia multipli di 5
        // - dichiaro una variabile alla quale assegno il valore di li all'interno della ulBox
        const liCell = document.createElement("li")
        // - aggiungo una classe alla variabile liCell per modificarne lo stile
        liCell.classList.add("bg_red", "cell_layout")
        // - assegno un innerhtml "FizzBuzz" a questa variabile
        liCell.innerHTML = "FizzBuzz"
        // - inserisco questa variabile nel DOM appendendola alla variabile ulBox
        ulBox.append(liCell)
    }else if(module3 == 0){
        //stampare in console la parola "Fizz" al posto dei numeri, se i numeri sono multipli di 3
        console.log("Fizz")
        //stampare nella pagina la parola "Fizz" al posto dei numeri multipli di 3 
        // - dichiaro una variabile alla quale assegno il valore di li all'interno della ulBox
        const liCell = document.createElement("li")
        // - aggiungo una classe alla variabile liCell per modificarne lo stile
        liCell.classList.add("bg_green", "cell_layout")
        // - assegno un innerhtml "Fizz" a questa variabile
        liCell.innerHTML = "Fizz"
        // - inserisco questa variabile nel DOM appendendola alla variabile ulBox
        ulBox.append(liCell)
    }else if(module5 === 0){
        //stampare in console la parola "Buzz" al posto dei numeri, se i numeri sono multipli di 5
        console.log("Buzz")
        //stampare nella pagina la parola "Buzz" al posto dei numeri multipli di 5 
        // - dichiaro una variabile alla quale assegno il valore di li all'interno della ulBox
        const liCell = document.createElement("li")
        // - aggiungo una classe alla variabile liCell per modificarne lo stile
        liCell.classList.add("bg_yellow", "cell_layout")
        // - assegno un innerhtml "Buzz" a questa variabile
        liCell.innerHTML = "Buzz"
        // - inserisco questa variabile nel DOM appendendola alla variabile ulBox
        ulBox.append(liCell)
    }else{
        //stampare in console i numeri che non sono né multipli di 3, né multipli di 5
        console.log(num)
        //stampare nella pagina il numero che normalmente non è né multiplo di 3 né multiplo di 5 
        // - dichiaro una variabile alla quale assegno il valore di li all'interno della ulBox
        const liCell = document.createElement("li")
        // - aggiungo una classe alla variabile liCell per modificarne lo stile
        liCell.classList.add("bg_blue", "cell_layout")
        // - assegno un innerhtml con contenuta la variabile num a questa stessa variabile
        liCell.innerHTML = num
        // - inserisco questa variabile nel DOM appendendola alla variabile ulBox
        ulBox.append(liCell)
    }
    
}