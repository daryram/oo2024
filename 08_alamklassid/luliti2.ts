class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
}

class toggleSwitch extends Resistor {
    constructor() {
      super(0);
    }
  toggle() {
    if (this.r < 0.1) {
      this.r = 1000000000
    }
    else {
      this.r = 0;
    }
  }
}

let sc1: SeriesCircuit = new SeriesCircuit();
let ts1: toggleSwitch = new toggleSwitch();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(110));
sc1.push(ts1);
console.log(sc1.getTotalResistance());
console.log(sc1.getCurrent(12));
ts1.toggle();
console.log(sc1.getTotalResistance());