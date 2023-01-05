const firstnumber = Math.floor(Math.random() * (100 - 1) + 1)
console.log(firstnumber);

    if(firstnumber % 2 === 0){
        if(firstnumber % 5 === 0){
            console.log("O número é par e divisível por 5");}
            else{console.log("O número é par mas NÃO é divisível por 5");}
    }else{console.log("O número é impar");}



    for (let i = 2; i < firstnumber; i++)
      if (firstnumber % i === 0) {
        console.log("Ele não é primo")
        break
      }else{if (i === firstnumber - 1)console.log("Ele é primo")}
