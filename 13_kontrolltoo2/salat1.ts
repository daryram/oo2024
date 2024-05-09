/**koosta klass toiduainete tarbeks (nimetus, valkude, rasvade, süsivesikute protsent).
kokku ei saa ületada 100 - muidu antakse veateade.
loo toiduaine (kartul, hapukoor, vorst)
Koosta klass toidukomponendi tarbeks (kogus, viit toiduainele)
Loo mõned toidukomponendid (100 g kartuleir, 30 g hapukoort, 50g vorsti)
Lisa toidukomponendile käsklus selle sees leiduva rasvakoguse arvutamiseks*/

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

    naitaRasvakogus(): void {
        const rasvakogus: number = this.arvutaRasvakogus();
        console.log(`Toidukomponendis '${this.toiduaine.nimetus}' (${this.kogus}g) on ${rasvakogus.toFixed(2)} grammi rasva.`);
    }
}

const kartul: Toiduaine = new Toiduaine("kartul", 1.9, 0.1, 15.5);
const hapukoor: Toiduaine = new Toiduaine("hapukoor", 3.3, 21.5, 3.8);
const vorst: Toiduaine = new Toiduaine("vorst", 9.6, 21.8, 7.2);
const limonaad: Toiduaine = new Toiduaine("limonaad", 0, 0, 10.3);
const seapekk: Toiduaine = new Toiduaine("seapekk", 4.2, 80.5, 0);

// Loo toidukomponendid
const kartulikomponent: Toidukomponent = new Toidukomponent(100, kartul);
const hapukoorekomponent: Toidukomponent = new Toidukomponent(30, hapukoor);
const vorstikomponent: Toidukomponent = new Toidukomponent(50, vorst);
const limonaadikomponent: Toidukomponent = new Toidukomponent(500, limonaad);
const seapekikomponent: Toidukomponent = new Toidukomponent(50, seapekk);
const seapekikomponent1: Toidukomponent = new Toidukomponent(100, seapekk);

// Näita rasvakogust toidukomponentidele
kartulikomponent.naitaRasvakogus();
hapukoorekomponent.naitaRasvakogus();
vorstikomponent.naitaRasvakogus();
limonaadikomponent.naitaRasvakogus();
seapekikomponent.naitaRasvakogus();
seapekikomponent1.naitaRasvakogus();
