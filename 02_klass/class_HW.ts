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

    hetkeKogus(): number {
        return this.kogus;
    }
}

// Näide kasutamisest:
const pudel = new Veepudel();
pudel.lisaVett(2);
pudel.lisaVett(1);
console.log(pudel.hetkeKogus());
pudel.lisaVett(3);
console.log(pudel.hetkeKogus());
pudel.lisaVett(1);
