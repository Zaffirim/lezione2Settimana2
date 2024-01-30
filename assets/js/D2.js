/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let num1= 5
let num2= 7
let risultato;

if(num1 < num2){
  risultato = 'num2 maggiore'
} else {
  risultato = 'num1 maggiore'
}

console.log(risultato)
 */



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let num = 56

let result;

if(num === 5){
  result = 'equal'
} else {
  result = 'not equal'
}

console.log(result)
 */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let num = 25

if(num % 5 === 0) {
  result = 'divisibile per 5'

} else {
  result = 'non divisibile'
}

console.log(result) */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let num1 = 1;
let num2 = 4;

let result;



if (num1 === 8, num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  result = 'è uno di questi';
} else {
  result = 'non è uno di questi';
}

console.log(result); */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let totalShoppingCart = 51;

let spedizioneGratuita;

if(totalShoppingCart > 50) {
spedizioneGratuita = 'la spedizione è gratuita';
} else{
  spedizioneGratuita = 'dovrai pagare la spedizione';
}

console.log(spedizioneGratuita); */
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let totalShoppingCart = 50;
let spedizioneGratuita;
let pagamentoDopoLoSconto;

if(totalShoppingCart > 50) {
  pagamentoDopoLoSconto = (totalShoppingCart * 20)/100
spedizioneGratuita = 'la spedizione è gratuita e avrai uno sconto del 20% perciò pagherai ' + pagamentoDopoLoSconto;
} else{
  spedizioneGratuita = 'dovrai pagare la spedizione';
}

console.log(spedizioneGratuita);  */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* 
let numero1 = 25;
let numero2 = 15;
let numero3 = 35;



if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log("Ordine decrescente:", numero1, numero2, numero3);
    } else {
        console.log("Ordine decrescente:", numero1, numero3, numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log("Ordine decrescente:", numero2, numero1, numero3);
    } else {
        console.log("Ordine decrescente:", numero2, numero3, numero1);
    }
} else {
    if (numero1 >= numero2) {
        console.log("Ordine decrescente:", numero3, numero1, numero2);
    } else {
        console.log("Ordine decrescente:", numero3, numero2, numero1);
    }
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* 
let valore = 'sfddsfdsf'; 
let result;

if(typeof valore === 'number') {
  console.log(valore + ' è un numero');
}else {
  console.log(valore + ' non è un numero');
} */




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let numeroPari = 11; 

if(numeroPari % 2 === 0){
  console.log('Il numero è pari')
} else {
  console.log('Il numero è dispari')
} */



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 5)  {
    console.log("Meno di 5")
    } else if ( val < 10){
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

 const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';
console.log(me);
 
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let arrayVuoto = [];

arrayVuoto.push(1,2,3,4,5,6,7,8,9,10);
console.log(arrayVuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayVuoto[arrayVuoto.length -1] = 100;
console.log(arrayVuoto);
