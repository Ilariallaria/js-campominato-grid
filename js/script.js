// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// ------------------
// LOGICA SECONDO ME
// ------------------

// -prompt che chiede il livello di difficoltà
let level = parseInt(prompt ('scegli il livello difficoltà da 1 a 3'));
// array vuoto che verrà popolato dalle bombe
let arrayBomb = [];
let createNumbers = 0;

// check numeri doppi: creo array vuoto
// let duplicate = [];

const rangeMaxLevel1 = 100;
const rangeMaxLevel2 = 81;
const rangeMaxLevel3 = 49
let rangeChoise;

    
switch(level){
    case 1:
        // genera 16 numeri tra 1 e 100 e pusch in arrayRandom
        rangeChoise = rangeMaxLevel1;
        getArrayBomb(1, rangeChoise);
    break;
    case 2:
        // genera 16 numeri tra 1 e 81 e pusch in arrayRandom
        rangeChoise = rangeMaxLevel2;
        getArrayBomb(1, rangeChoise);
    break;
    case 3:
        // genera 16 numeri tra 1 e 49 e pusch in arrayRandom
        rangeChoise = rangeMaxLevel3;
        getArrayBomb(1, rangeChoise);
    break;
}

console.log(arrayBomb);
// check numeri doppi: stampo entrambi gli array e verifico se davvero ci sono numeri uguali
// console.log(duplicate);


// contatore che tiene traccia della quantità di numeri inseriti
let counterAttempt = 0;
let maxAttempt = rangeChoise - 16;

// game in play settato vero
let gameOn = true;


// finchè game è in play 
while(gameOn){

    // prompt che chiede numero tra 1 e rangeChoise
    let userNumber = parseInt(prompt('inserisci un numero da 1 a '+ rangeChoise));
       
     // se counterAttempt, è minore di maxAttempt e userNumber appartiene ad arrayBomb -->fine gioco, messaggio sei morto e punteggio
    if(counterAttempt < maxAttempt && arrayBomb.includes(userNumber)){
        alert(`Gameover! :( Hai totalizzato ${counterAttempt} punti`);
        gameOn = false;

     // se counterAttempt, è minore di maxAttempt e userNumber NON appartiene ad arrayBomb --> aumenta counter, richiesta altro numero
    }else if(counterAttempt < maxAttempt && !arrayBomb.includes(userNumber)){
        counterAttempt++;

     // raggiunti i tentativi massimi --> fine gioco, messaggio vittoria e punteggio
    }else if (counterAttempt == maxAttempt ){
        alert(`hai vinto!! Complimenti, hai totalizzato ${counterAttempt} punti!`);
        gameOn = false;
    }
};



// ------------
// FUNZIONI
// ------------

// funzione che genera random tra min e max inclusi che indico io
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che riempie array con 16 numeri random presi nell'intervallo scelto dall'utente
function getArrayBomb (){

    while (createNumbers<16){
        let thisNumber = getRndInteger(1, rangeChoise );

        // evita duplicati
        if(arrayBomb.includes(thisNumber)){

            // check numeri doppi: pusho numeri doppi in arrai duplicate
            // duplicate.push (thisNumber);
            let thisNumber = getRndInteger(1, rangeChoise);
        }
        else{
            arrayBomb.push (thisNumber);
            createNumbers++;
        }
    }
}