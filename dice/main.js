function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const rndInt = randomIntFromInterval(1, 6)
  console.log(rndInt);

function secondRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
  
    const secondRndInt = secondRandomIntFromInterval(1, 6)
    console.log(secondRndInt);


function thirdRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const thirdRndInt = thirdRandomIntFromInterval(1, 6)
    console.log(thirdRndInt);

let sum = rndInt + secondRndInt + thirdRndInt;

console.log(sum);