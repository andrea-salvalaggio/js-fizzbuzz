// 1) Creare un cliclo for che stampi in console numeri da 1 a 100
//      - Bisogna utilizzare "for (let i = 1; i <= 100; index = i++);
// 2) Stampare in console che i multipli (divisibili) di 3 diventino "Fizz"
// 3) Stampare in console che i multipli (divisibili) di 5 diventino "Buzz"
// 4) Stampare in console che i multipli (divisibili) di 3 e 5 diventino "FizzBuzz"
//      - Ultilizzare gli "if" dentro i cicli

// Per capire se un numero è divisibile per un altro utilizzare la funzione "%" (modulo)


for (let index = 1; index <= 100; index++) {

    if ((index % 3 == 0) && (index % 5 == 0)) {
        let wordFizzBuzz = 'FizzBuzz';
        console.log(wordFizzBuzz);
    } else if (index % 3 == 0) {
        let wordFizz = 'Fizz';
        console.log(wordFizz);
    } else if (index % 5 == 0) {
        let wordBuzz = 'Buzz';
        console.log(wordBuzz);
    } else {
        console.log(index);
    }

}