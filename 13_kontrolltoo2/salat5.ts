class Salatiretsept {
    constructor(public weight: number) {}

    calculateIngredients(): { [ingredient: string]: { name: string; amount: number } } {
        const scaleFactor = this.weight / 1000;
        return {
            kartul: { name: "kartul", amount: 600 * scaleFactor },
            hapukoor: { name: "hapukoor", amount: 200 * scaleFactor },
            vorst: { name: "vorst", amount: 100 * scaleFactor },
            majonees: { name: "majonees", amount: 70 * scaleFactor },
            till: { name: "till", amount: 30 * scaleFactor }
        };
    }
}

const salatiretsept = new Salatiretsept(5000);
const koostisosad = salatiretsept.calculateIngredients();
console.log(koostisosad);
