class Inimene {

    static inimLoend: number = 0;

    protected eesnimi : string;
    protected perekonnanimi : string;
    protected synniaasta : number;
    nimeLoendur : number;

    constructor(eesnimi : string, perekonnanimi : string, synniaasta : number) {
        if (synniaasta < 1990 || synniaasta > new Date().getFullYear()) {
            console.warn("parameetrid ei sobi");
        }
        this.eesnimi = eesnimi;
        this.perekonnanimi = perekonnanimi
        this.synniaasta = synniaasta;
        this.nimeLoendur = 0;

        Inimene.inimLoend++;
    }

    v2ljastaEesnimi(): string {
      this.nimeLoendur++;
      return this.eesnimi;
    }

    v2ljastaPerekonnanimi(): string {
      return this.perekonnanimi;
    }

    v2ljastaAasta(): number {
      return this.synniaasta;
    }

    v2ljastanimeLoendur(): number {
      return this.nimeLoendur;
    }

    static V2ljastaInimeseLoendur(): number {
      return Inimene.inimLoend;
    }
}

let inimene1 = new Inimene("Kalvi", "Kalle", 2004);
console.log(inimene1.v2ljastaEesnimi());
console.log(inimene1.v2ljastaEesnimi());
console.log(inimene1.v2ljastaEesnimi());
console.log(inimene1.v2ljastanimeLoendur());

let inimene2 = new Inimene("Eha", "Videvik", 1997);
console.log(inimene2.v2ljastaEesnimi());
let inimene3 = new Inimene("Peeter", "Lühike", 1860);
let inimene4 = new Inimene("Jaana", "Lind", 2033);

console.log(Inimene.V2ljastaInimeseLoendur());