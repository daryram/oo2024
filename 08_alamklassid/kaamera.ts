//!npm install typescript ts-node @types/node
//!npx ts-node kaamera.ts


class Kaamera {
    mark: string;
    constructor(mark: string) {
        this.mark = mark;
    }
    valjastaMark() {
        console.log(`Kaamera mark: ${this.mark}`);
    }
    kasutaVidinat(vidin: Vidin) {
        console.log(`${this.mark} kasutab vidinat: ${vidin.nimi}`);
        vidin.kasuta();
    }
}

class CanonKaamera extends Kaamera {
    constructor() {
        super("Canon");
    }
}

class NikonKaamera extends Kaamera {
    constructor() {
        super("Nikon");
    }
}

class SonyKaamera extends Kaamera {
    constructor() {
        super("Sony");
    }
}

class Vidin {
    nimi: string;
    constructor(nimi: string) {
        this.nimi = nimi;
    }
    kasuta() {
    }
}

class Lens extends Vidin {
    constructor(mark: string) {
        super(`${mark} 18-55mm lens`);
    }
}

class Statiiv extends Vidin {
    constructor() {
        super("Statiiv");
    }
}

class KlaasiLapp extends Vidin {
    constructor() {
        super("Klaasi lapp");
    }
}

class TamronValk extends Vidin {
    constructor() {
        super("Tamron välk");
    }
}


const canonKaamera = new CanonKaamera();
const nikonKaamera = new NikonKaamera();
const sonyKaamera = new SonyKaamera();

const canonLens = new Lens("Canon");
const nikonLens = new Lens("Nikon");
const statiiv = new Statiiv();
const klaasiLapp = new KlaasiLapp();
const tamronValk = new TamronValk();

//Vidinate ühendamine kaameratega
canonKaamera.valjastaMark();
canonKaamera.kasutaVidinat(canonLens);
sonyKaamera.valjastaMark();
sonyKaamera.kasutaVidinat(statiiv);
sonyKaamera.kasutaVidinat(klaasiLapp);
nikonKaamera.valjastaMark();
nikonKaamera.kasutaVidinat(tamronValk);
nikonKaamera.kasutaVidinat(nikonLens);
