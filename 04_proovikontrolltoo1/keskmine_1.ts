/*Koosta funktsioon kolme arvu aritmeetilise keskmise leidmiseks.
Katseta.*/

function calculateAverage(num1:number, num2:number, num3:number): number {
  return(num1 + num2 + num3) / 3;
}

const average = calculateAverage (10, 20, 30);
console.log("Your average is:", average);