/*Koosta klass, milles on üks massiiv kolmnurga
x-koordinaatide hoidmiseks
ning teine massiiv y-koordinaatide hoidmiseks.
Koosta klassist kaks eksemplari, määra algväärtused
ning trüki andmed välja.*/

class Grupp1{
  Xkordinaadid: number[]=[];
  lisaX(X: number){
    this.Xkordinaadid.push(X);
  }
  kysiX():number[]{return this.Xkordinaadid;}
}

class Grupp2{
  Ykordinaadid: number[]=[];
  lisaY(Y: number){
    this.Ykordinaadid.push(Y);
  }
  kysiY():number[]{return this.Ykordinaadid;}
}

let g1 = new Grupp1();
g1.lisaX(5);
g1.lisaX(8);
console.log(g1.kysiX());

let g2 = new Grupp2();
g2.lisaY(4);
g2.lisaY(9);
console.log(g2.kysiY());