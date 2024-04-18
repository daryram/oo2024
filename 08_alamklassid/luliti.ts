class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getResistance(): number {
        return this.r;
    }
}

class Switch extends Resistor {
    constructor() {
        super(0);
    }
    on() {
        this.r = 0;
    }
    off() {
        this.r = 1000000000;
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

let sw1: Switch = new Switch();
let sw2: toggleSwitch = new toggleSwitch();
console.log(sw1.getResistance());
sw1.off();
console.log(sw1.getResistance());
sw1.on();
console.log(sw1.getResistance());

//toggle osa
console.log(sw2.getResistance());
sw2.toggle();
console.log(sw2.getResistance());