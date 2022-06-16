
// 1) Creare un cliclo for che stampi in console numeri da 1 a 100
//      - Bisogna utilizzare "for (let i = 0; i > 100; index = i--);
// 2) Stampare in console che i multipli (divisibili) di 3 diventino "Fizz"
// 3) Stampare in console che i multipli (divisibili) di 5 diventino "Buzz"
//      - Ultilizzare gli "if" dentro i cicli

// Per capire se un numero è divisibile per un altro utilizzare la funzione "%" (modulo)


for (let index = 1; index <= 100; index++) {
    console.log(index);

    if (index % 3 == 0) {
        let indexFizz = ('Fizz');
        console.log(indexFizz);
    }

}