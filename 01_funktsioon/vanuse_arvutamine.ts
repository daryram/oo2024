// vanuse arvutamise funktsioon
function arvutaVanus(sunniaasta: number): number {
    const praeguneAasta = new Date().getFullYear();
    return praeguneAasta - sunniaasta;
}

// vanuse sorteerimis funktsioon
function vanuseKategooria(vanus: number): string {
    if (vanus < 18) {
        return "Alaealine";
    } else if (vanus > 64) {
        return "Pensionär";
    } else {
        return "Täiskasvanu";
    }
}

// Näide kasutusest
const sunniaasta = 2006;

// Arvuta vanus
const vanus = arvutaVanus(sunniaasta);

// Kategooriseeri vanus
const kategooria = vanuseKategooria(vanus);

// Väljasta tulemus
console.log("Vanus:", vanus);
console.log("Kategooria:", kategooria);