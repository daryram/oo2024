class S6num {
    sisu: string;
    autor: string;
    aeg: number;
    meeldimised: number;

    constructor(sisu: string, autor: string, aeg: number, meeldimised: number) {
        this.sisu = sisu;
        this.autor = autor;
        this.aeg = aeg;
        this.meeldimised = meeldimised;
    }

    populaarsus(): number {
      return this.meeldimised/this.aeg;
    }

lisaMeeldimine(){
  this.meeldimised= this.meeldimised+1;
}

}

let s1 = new S6num("Tere, kuidas läheb", "Emma", 3, 5);
let s2 = new S6num("Tere, kuidas läheb?", "Ott", 7, 0);

console.log(s1.sisu, s1.autor, s1.populaarsus());