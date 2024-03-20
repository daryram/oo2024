var PancakeRecipe = /** @class */ (function () {
    function PancakeRecipe(servings) {
        this.servings = servings;
    }
    PancakeRecipe.prototype.calculateIngredients = function () {
        var scaleFactor = this.servings / 8; // Adjusts for different servings
        return {
            flour: { name: "flour", amount: 125 * scaleFactor },
            eggs: { name: "eggs", amount: 1 * scaleFactor },
            milk: { name: "milk", amount: 250 * scaleFactor },
            salt: { name: "salt", amount: 2 * scaleFactor },
            bakingPowder: { name: "baking powder", amount: 2 * scaleFactor }
        };
    };
    return PancakeRecipe;
}());
