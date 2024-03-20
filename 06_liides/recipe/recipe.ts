class PancakeRecipe {
    constructor(public servings: number) {}

    calculateIngredients(): Recipe {
        const scaleFactor = this.servings / 8; // Adjusts for different servings
        return {
            flour: { name: "flour", amount: 125 * scaleFactor },
            eggs: { name: "eggs", amount: 1 * scaleFactor },
            milk: { name: "milk", amount: 250 * scaleFactor },
            salt: { name: "salt", amount: 2 * scaleFactor },
            bakingPowder: { name: "baking powder", amount: 2 * scaleFactor }
        };
    }
}

interface Recipe {
    flour: Ingredient;
    eggs: Ingredient;
    milk: Ingredient;
    salt: Ingredient;
    bakingPowder: Ingredient;
}

interface Ingredient {
    name: string;
    amount: number;
}
