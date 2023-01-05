const RandomNumber = Math.floor(Math.random() * 10 + 1)
const WinnerNumber = Math.floor(Math.random() * 10 + 1)

console.log(RandomNumber, "Random");
console.log(WinnerNumber, "CERTO");

if (RandomNumber === WinnerNumber){ console.log("Ganhou uma geladeira eletrolux")}
else{console.log("perdeu ;-;");}
