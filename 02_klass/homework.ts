class Veepudel {
    private kogus: number;

    constructor() {
        this.kogus = 0;
    }

    lisaVett(kogus: number): void {
        this.kogus += kogus;
        if (this.kogus >= 5) {
            console.log("Pudel on nüüd täis!");
            this.kogus = 5; // Veendume, et pudel ei ületa maksimaalset mahutavust
        } else {
            console.log(`Lisati ${kogus} liitrit vett. Kokku: ${this.kogus} liitrit.`);
        }
    }

    v6taVett(kogus: number): void {
        if (kogus <= this.kogus) {
            this.kogus -= kogus;
            console.log(`Võeti ${kogus} liitrit vett. Järel: ${this.kogus} liitrit.`);
        } else {
            console.log("Pudelis pole piisavalt vett!");
        }
    }

    hetkeKogus(): number {
        return this.kogus;
    }
}

// Näide kasutamisest:
const pudel = new Veepudel();
pudel.lisaVett(2);
pudel.lisaVett(1);
pudel.lisaVett(2);
console.log(pudel.hetkeKogus());
pudel.v6taVett(1);
console.log(pudel.hetkeKogus());
pudel.v6taVett(2);
console.log(pudel.hetkeKogus());
pudel.v6taVett(2);
pudel.v6taVett(1);