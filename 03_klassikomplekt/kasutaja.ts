class KasutajaHoidla {
    private kasutajad: Map<string, Kasutaja>;

    constructor() {
        this.kasutajad = new Map();
    }

    lisaKasutaja(kasutaja: Kasutaja): void {
        this.kasutajad.set(kasutaja.id, kasutaja);
    }

    eemaldaKasutaja(kasutajaId: string): void {
        this.kasutajad.delete(kasutajaId);
    }

    saaKasutaja(kasutajaId: string): Kasutaja | undefined {
        return this.kasutajad.get(kasutajaId);
    }

    saaKõikKasutajad(): Kasutaja[] {
        return Array.from(this.kasutajad.values());
    }
}

class Kasutaja {
    constructor(public id: string, public nimi: string, public email: string) {}
}

// Näide kasutamisest
const kasutajaHoidla = new KasutajaHoidla();

const kasutaja1 = new Kasutaja("1", "Jaak Tamm", "jaak@tamm.ro");
const kasutaja2 = new Kasutaja("2", "Mari Mets", "mari@mets.com");
const kasutaja3 = new Kasutaja("3", "Jaagup Kippar", "jaagup@kippar.ee");
const kasutaja4 = new Kasutaja("4", "Daria Bayram", "daria@bayram.se");

kasutajaHoidla.lisaKasutaja(kasutaja1);
kasutajaHoidla.lisaKasutaja(kasutaja2);
kasutajaHoidla.lisaKasutaja(kasutaja3);
kasutajaHoidla.lisaKasutaja(kasutaja4);

console.log("Kõik kasutajad hoidlas:");
console.log(kasutajaHoidla.saaKõikKasutajad());

console.log("Kasutaja eemaldamine hoidlast:");
kasutajaHoidla.eemaldaKasutaja("1");
kasutajaHoidla.eemaldaKasutaja("4");
console.log(kasutajaHoidla.saaKõikKasutajad());