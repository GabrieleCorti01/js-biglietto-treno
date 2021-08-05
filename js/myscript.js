
let numeroChilometri = parseInt(prompt("Inserisci il numero di chilometri") )
console.log (numeroChilometri)

let anniPasseggero = parseInt(prompt("Inserissci la tua età"))
console.log (anniPasseggero)

let prezzoBiglietto = (numeroChilometri * 0.21)
console.log (prezzoBiglietto)

// let scontoMinoreni = (("prezzoBiglietto : 20") * 100);
// console.log (prezzoBiglietto)

let sconto

if (anniPasseggero < 18){
    sconto = (("prezzoBiglietto % 20") * 100);
}