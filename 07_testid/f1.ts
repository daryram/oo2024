export function kasPositiivne(arv:number){
   return arv>0;
}

export function  keskmineKiirus(kiirus1: number, kiirus2:number):number{
  //return keskmineKiirusMassiivist([kiirus1, kiirus2])
  let kesk:number
  let aeg:number
  aeg = 60/kiirus1 + 60/kiirus2
  kesk = 2*60 / aeg
  return kesk ; 
  //return (2*60)/(60/kiirus1+60/kiirus2);
}

export function keskmineKiirusMassiivist (kiirused:number[]):number{
  let aegadeSumma = 0;
  for(let kiirus of kiirused){
    aegadeSumma+=60/kiirus;
  }
  return kiirused.length*60/aegadeSumma;
}
