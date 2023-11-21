let spazio = prompt("quanti chilometri deve percorrere?");
console.log(spazio); 
let eta = prompt("qual è la sua età?");
console.log(eta);
const prezzo_km = 0.21;
console.log(prezzo_km);

let prezzo_biglietto = spazio * prezzo_km;
if(eta >= 66){
    prezzo_biglietto = prezzo_biglietto * 0.6;
    console.log("al prezzo del biglietto è stato applicato uno sconto del 40% :", prezzo_biglietto.toFixed(2),"€");
}
else if(eta < 18){
    prezzo_biglietto = prezzo_biglietto * 0.8;
    console.log("al prezzo del biglietto è stato applicato uno sconto del 20% :", prezzo_biglietto.toFixed(2),"€");
}
else{
    console.log("il prezzo del biglietto è di:", prezzo_biglietto.toFixed(2),"€");
}

