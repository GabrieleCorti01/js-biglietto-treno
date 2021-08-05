let sconto

let numeroChilometri = parseInt(prompt("Inserisci il numero di chilometri") )
console.log (numeroChilometri)

let anniPasseggero = parseInt(prompt("Inserissci la tua età"))
console.log (anniPasseggero)

let valoreBiglietto = (numeroChilometri * 0.21)
console.log (valoreBiglietto)


if (anniPasseggero < 18){
    sconto = ((valoreBiglietto * 20) / 100);
}
else if (anniPasseggero > 65){
    sconto = ((valoreBiglietto * 40) / 100);
}
if (anniPasseggero = 18 || anniPasseggero = 65 |{
    sconto = 0;
}
console.log(sconto)

let prezzoBigliettoFinale = (valoreBiglietto - sconto);
console.log(prezzoBigliettoFinale)