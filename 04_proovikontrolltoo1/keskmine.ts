function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0; // handle the case when the array is empty
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

// Example usage:
const numbers = [5, 10, 15, 20];
const average = calculateAverage(numbers);
console.log("Average:", average);
