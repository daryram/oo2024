/**Loo retsepti järgi toit (kartulisalat), küsi salatis leiduvate toitainete kogused.
kuva valitud toidu etteantud koguse ( 5 kg kartulisalatit) jaoks vajalikud toiduained*/

class Toiduaine {
    nimetus: string;
    valgud: number;
    rasvad: number;
    susivesikud: number;

    constructor(nimetus: string, valgud: number, rasvad: number, susivesikud: number) {
        if ((valgud + rasvad + susivesikud) > 100) {
            throw new Error("Toiduaine valkude, rasvade ja susivesikute protsendi summa ei saa ületada 100%");
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

function kuvaVajalikudKogused(komponendid: Toidukomponent[], kogusGrammides: number) {
    console.log("Vajalikud toiduained " + (kogusGrammides / 1000) + " kg kartulisalati valmistamiseks:");
    komponendid.forEach(komponent => {
        const vajalikKogus = komponent.kogus * (kogusGrammides / 100);
        console.log(`${vajalikKogus}g ${komponent.toiduaine.nimetus}`);
    });
}

// Loome toiduained
const kartul: Toiduaine = new Toiduaine("kartul", 2.1, 0.1, 17.4);
const hapukoor: Toiduaine = new Toiduaine("hapukoor", 2.2, 20, 3.6);
const vorst: Toiduaine = new Toiduaine("vorst", 14, 25, 0);
const majonees: Toiduaine = new Toiduaine("majonees", 0.5, 25, 20.7)
const till: Toiduaine = new Toiduaine("till", 3.7, 0.8, 0.9)

// Loome toidukomponendid
const kartulikomponent: Toidukomponent = new Toidukomponent(100, kartul);
const hapukoorekomponent: Toidukomponent = new Toidukomponent(30, hapukoor);
const vorstikomponent: Toidukomponent = new Toidukomponent(50, vorst);
const majoneesikomponent: Toidukomponent = new Toidukomponent(20, majonees);
const tillikomponent: Toidukomponent = new Toidukomponent(5, till);

const kartulisalatKomponendid: Toidukomponent[] = [kartulikomponent, hapukoorekomponent, vorstikomponent, majoneesikomponent, tillikomponent];

// Näitame vajalikud toiduained 5 kg kartulisalati valmistamiseks
kuvaVajalikudKogused(kartulisalatKomponendid, 5000);
