const NumberOne = Math.floor(Math.random() * (10 - 1) + 1)
const NumberTwo = Math.floor(Math.random() * (10 - 1) + 1)
const NumberThree = Math.floor(Math.random() * (10 - 1) + 1)
console.log(NumberOne, '-', "PRIMEIRO",);
console.log(NumberTwo, '-', "SEGUNDO");
console.log(NumberThree, '-', "TERCEIRO");

if(NumberOne > NumberTwo && NumberOne > NumberThree){console.log("O primeiro é o maior");}
else if(NumberTwo > NumberThree){console.log("O segundo é o maior")}
else {console.log("O terceiro é o maior");}

if(NumberOne < NumberTwo && NumberOne < NumberThree){console.log("O primeiro é o menor");}
else if(NumberTwo < NumberThree){console.log("O segundo é o menor")}
else {console.log("O terceiro é o menor");}