import { PancakeRecipe } from '../pancakerecipe';

describe('PancakeRecipe', () => {
    it('should calculate ingredients correctly for different servings', () => {
        const recipe = new PancakeRecipe(4); // Test for 4 servings
        const result = recipe.calculateIngredients();

        expect(result.flour.amount).toBeCloseTo(62.5, 2); // 125 * (4/8) = 62.5
        expect(result.eggs.amount).toBeCloseTo(0.5, 2); // 1 * (4/8) = 0.5
        expect(result.milk.amount).toBeCloseTo(125, 2); // 250 * (4/8) = 125
        expect(result.salt.amount).toBeCloseTo(1, 2); // 2 * (4/8) = 1
        expect(result.bakingPowder.amount).toBeCloseTo(1, 2); // 2 * (4/8) = 1
    });

    it('should calculate ingredients correctly for default servings', () => {
        const recipe = new PancakeRecipe(8); // Default servings
        const result = recipe.calculateIngredients();

        expect(result.flour.amount).toBe(125);
        expect(result.eggs.amount).toBe(1);
        expect(result.milk.amount).toBe(250);
        expect(result.salt.amount).toBe(2);
        expect(result.bakingPowder.amount).toBe(2);
    });

        it('should calculate ingredients correctly for default servings again', () => {
        const recipe = new PancakeRecipe(10); // Default servings
        const result = recipe.calculateIngredients();

        expect(result.flour.amount).toBe(156.25);
        expect(result.eggs.amount).toBe(1.25);
        expect(result.milk.amount).toBe(312.5);
        expect(result.salt.amount).toBe(2.5);
        expect(result.bakingPowder.amount).toBe(2.5);
    });
});