// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

let userCheck = false;
let userDifficulty = userInput();
console.log(userDifficulty);

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.

let bombs = gameBombs();
console.log(bombs);

// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
for(let i = 1; i < (userDifficulty - bombs.length); i++){
    let userChoice = parseInt(prompt("inserisci un numero da scoprire!"));
    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.
    if(bombs.includes(userChoice)){
        alert(`hai fatto scoppiare una bomba dopo ${i} tentativi!`);
        break
    }else if(i === (userDifficulty - bombs.length) - 1){
        alert("hai vinto!");
    }
}

function userInput(){
    while(userCheck === false){
        let userChoice = parseInt(prompt("inserisci il livello di difficoltà(1-2-3)"));
        let gameDifficulty = 0;
        switch(userChoice) {
            case 1:
                gameDifficulty = 100;
                break;
            case 2:
                gameDifficulty = 81;
                break;
            case 3:
                gameDifficulty = 49;
                break
            default:
                gameDifficulty = "errore";
                throw "inserisci un numero tra 1 e 3!"
        }
        return gameDifficulty;
    }
}
function gameBombs(){
    let bombs = [];
    while(bombs.length < 16){
        let singleBomb = Math.floor(Math.random() * 100 + 1);
        if(!bombs.includes(singleBomb)){
            bombs.push(singleBomb);
        }
    }
    return bombs;
}