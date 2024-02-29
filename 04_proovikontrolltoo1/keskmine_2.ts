/*Koosta funktsioon massiivi libiseva
keskmise leidmiseks. Väljundiks on massiiv,
mis on sisendist kahe elemendi võrra lühem ning
mille iga elemendi väärtuseks on sisendmassiivi vastava elemendi
ning selle järgmise ja ülejärgmise elemendi keskmine.*/

const arvutaKeskmine = (data: number[], start: number, stop: number): number => {
    let sum = 0;
    for (let j = start; j < stop; ++j) {
        sum += data[j];
    }
    return sum;
};

const arvutaLibisev = (data: number[], window: number): number[] => {
    const steps = data.length - window;
    const result = [];
    for (let i = 0; i < steps; ++i) {
        const sum = arvutaKeskmine(data, i, i + window);
        result.push(sum / window);
    }
    return result;
};


// Usage example:

const data: number[] = [1, 2, 3, 4, 5, 6];
const average: number[] = arvutaLibisev(data, 3);

console.log(average);