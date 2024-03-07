class Inimene {
  protected eesnimi : string;
  protected perekonnanimi : string;
  protected synniaasta : number;

  constructor(eesnimi : string, perekonnanimi : string, synniaasta : number) {
    this.eesnimi = eesnimi;
    this.perekonnanimi = perekonnanimi
    this.synniaasta = synniaasta;
  }

  v2ljastaNimi(): string {
    return this.eesnimi + " " + this.perekonnanimi;
  }

  v2ljastaAasta(): number {
    return this.synniaasta;
  }
}

const inimene1 = new Inimene("Daria", "Bayram", 1997);
const inimene2 = new Inimene("Maali", "Maasikas", 1990);
const inimene3 = new Inimene("Vasja", "Vasikas", 2001);
console.log(inimene1.v2ljastaNimi());
console.log(inimene1.v2ljastaAasta());
console.log(inimene2.v2ljastaNimi());
console.log(inimene3.v2ljastaAasta());