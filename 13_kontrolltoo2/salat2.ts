/**Koosta klass toidu jaoks ( nimetus, toidukomponendid)
Toidule käsklused küsimaks sisalduvate valkude, rasvade ja süsivesikute kogust*/

class Toiduaine {
    nimetus: string;
    valgud: number;
    rasvad: number;
    susivesikud: number;

    constructor(nimetus: string, valgud: number, rasvad: number, susivesikud: number) {
        if ((valgud + rasvad + susivesikud) > 100) {
            throw new Error("Toiduaine valkude, rasvade ja susivesikute protsendi summa ei saa ületada 100.");
        }
        this.nimetus = nimetus;
        this.valgud = valgud;
        this.rasvad = rasvad;
        this.susivesikud = susivesikud;
    }
}

class Toidukomponent {
    kogus: number;
    toiduaine: Toiduaine;

    constructor(kogus: number, toiduaine: Toiduaine) {
        this.kogus = kogus;
        this.toiduaine = toiduaine;
    }

    arvutaRasvakogus(): number {
        return (this.toiduaine.rasvad / 100) * this.kogus;
    }
}

class Toit {
    nimetus: string;
    komponendid: Toidukomponent[];

    constructor(nimetus: string, komponendid: Toidukomponent[]) {
        this.nimetus = nimetus;
        this.komponendid = komponendid;
    }

    arvutaValgud(): number {
        let valgudSumma = 0;
        this.komponendid.forEach(komponent => {
            valgudSumma += (komponent.toiduaine.valgud / 100) * komponent.kogus;
        });
        return valgudSumma;
    }

    arvutaRasvad(): number {
        let rasvadSumma = 0;
        this.komponendid.forEach(komponent => {
            rasvadSumma += komponent.arvutaRasvakogus();
        });
        return rasvadSumma;
    }

    arvutaSusivesikud(): number {
        let susivesikudSumma = 0;
        this.komponendid.forEach(komponent => {
            susivesikudSumma += (komponent.toiduaine.susivesikud / 100) * komponent.kogus;
        });
        return susivesikudSumma;
    }
}

const kartul: Toiduaine = new Toiduaine("kartul", 1.9, 0.1, 15.5);
const hapukoor: Toiduaine = new Toiduaine("hapukoor", 3.3, 21.5, 3.8);
const vorst: Toiduaine = new Toiduaine("vorst", 9.6, 21.8, 7.2);

const kartulikomponent: Toidukomponent = new Toidukomponent(100, kartul);
const hapukoorekomponent: Toidukomponent = new Toidukomponent(30, hapukoor);
const vorstikomponent: Toidukomponent = new Toidukomponent(50, vorst);

const toit: Toit = new Toit("Väga igav kartulisalat", [kartulikomponent, hapukoorekomponent, vorstikomponent]);

console.log(`Toidus '${toit.nimetus}' on ${toit.arvutaValgud().toFixed(2)}g valke, ${toit.arvutaRasvad().toFixed(2)}g rasvu ja ${toit.arvutaSusivesikud().toFixed(2)}g süsivesikuid.`);
