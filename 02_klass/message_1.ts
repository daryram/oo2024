class S6num {
  constructor(protected sisu: string, protected autor: string, protected aeg: number, protected meeldimised: number) {
      this.sisu = sisu;
      this.autor = autor;
      this.aeg = aeg;
      this.meeldimised = meeldimised;
  }

  populaarsus(): number {
    return this.meeldimised/this.aeg;
  }

kysiSisu(){return this.sisu;}
lisaMeeldimine(){
//  this.meeldimised = this.meeldimised+1;
  this.meeldimised++;
}

}

let s1 = new S6num("Tere, kuidas läheb", "Emma", 4, 2);
let s2 = new S6num("Tere, kuidas läheb?", "Ott", 7, 0);

console.log(s1.kysiSisu(), s1.populaarsus());
s1.lisaMeeldimine();
console.log(s1.populaarsus(), s2.populaarsus());