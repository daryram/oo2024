/*Koosta funktsioon massiivi libiseva
keskmise leidmiseks. Väljundiks on massiiv,
mis on sisendist kahe elemendi võrra lühem ning
mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi
ning selle järgmise ja ülejärgmise elemendi keskmine.*/

function keskmine(num1:number, num2:number, num3:number): number {
  return (num1 + num2 + num3) / 3;
}

function libisev(sisendn:number[]){
  let vastus:number[]=[]
  for (let i=0; i<sisendn.length-2; i++){
    vastus.push(keskmine(sisendn[i], sisendn[i+1], sisendn[i+2]));
  }
  return vastus;
}

console.log(keskmine(3, 4, 5));
console.log (libisev([3, 3, 2, 7, 7, 8]));