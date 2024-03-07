class Inimene {
    private static loendur: number = 0;
    private _eesnimi: string;
    private _perekonnanimi: string;
    private _sunniaasta: number;
    private _kordadeArv: number;

    constructor(eesnimi: string, perekonnanimi: string, sunniaasta: number) {
        this._eesnimi = eesnimi;
        this._perekonnanimi = perekonnanimi;
        this._sunniaasta = sunniaasta;
        this._kordadeArv = 0;
        Inimene.loendur++;
    }

    public get eesnimi(): string {
        this._kordadeArv++;
        return this._eesnimi;
    }

    public get perekonnanimi(): string {
        return this._perekonnanimi;
    }

    public get sunniaasta(): number {
        return this._sunniaasta;
    }

    public get kordadeArv(): number {
        return this._kordadeArv;
    }

    public static inimesteLoendur(): number {
        return Inimene.loendur;
    }
}

class Kool {
    private static loendur: number = 0;
    private _id: number;
    private _aadress: string;
    private _nimetus: string;
    private _isikud: Inimene[];

    constructor(aadress: string, nimetus: string) {
        this._id = ++Kool.loendur;
        this._aadress = aadress;
        this._nimetus = nimetus;
        this._isikud = [];
    }

    public lisaInimene(isik: Inimene): void {
        this._isikud.push(isik);
    }

    public get inimesteArv(): number {
        return this._isikud.length;
    }

    public get id(): number {
      return this._id;
    }

    public get kooliOpilased(): Inimene[] {
        return this._isikud;
    }
}

const inimene1 = new Inimene("Mati", "Maasikas", 1990);
const inimene2 = new Inimene("Mari", "Mustikas", 1985);
const inimene3 = new Inimene("Mari", "Maasikas", 1985);
const inimene4 = new Inimene("Kaarel", "Kadakas", 2000);
const inimene5 = new Inimene("Kaarel", "Koppel", 1999);
const inimene6 = new Inimene("Gerda", "Koppel", 1999);
const inimene7 = new Inimene("Daria", "Bayram", 1997);

const kool1 = new Kool("Tartu tn 1", "Tartu Kool");
const kool2 = new Kool("Narva tn 5", "Narva Kool");
const kool3 = new Kool("tallinna tn 9", "Tallinna Kool");

const opilasedKoolis3 = kool3.kooliOpilased;

kool1.lisaInimene(inimene1);
kool2.lisaInimene(inimene2);
kool2.lisaInimene(inimene3);
kool2.lisaInimene(inimene4);
kool3.lisaInimene(inimene5);
kool3.lisaInimene(inimene6);
kool3.lisaInimene(inimene7);

console.log("Inimesi Tallinna koolis:", kool3.inimesteArv);
console.log("Tartu kooli id:", kool1.id);
console.log("Inimeste arv koolis 1:", kool1.inimesteArv);
console.log("Narva kooli id:", kool2.id);
console.log("Inimeste arv koolis 2:", kool2.inimesteArv);
console.log("Koolides kokku inimesi:", Inimene.inimesteLoendur());
console.log("Õpilased koolis 3 (Tallinna kool):", opilasedKoolis3);