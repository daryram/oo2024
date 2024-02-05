function korrutaKahega(arv:number){
  return arv*2;
}

console.log(korrutaKahega(7));

//koosta KMI leidmise funktsioon

function KMI(kaal:number, pikkus:number){
  return kaal / (pikkus*pikkus);
}

console.log(KMI(80, 1.8).toFixed(1))

function KMIhinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal";}
  if(indeks<18.5){return "alakaal";}
  if(indeks<25){return "normaalkaal";}
  if(indeks<30){return "ülekaal";}
  if(indeks<35){return "rasvumine";}
  if(indeks<40){return "tugev rasvumine";}
  return "Tervisele ohtlik rasvumine";
}
console.log(KMIhinnang(24.7))

let KMIarvud:number[]=[25, 14, 38, 28];
let hinnangud=KMIarvud.map(KMIhinnang);
console.log(hinnangud)