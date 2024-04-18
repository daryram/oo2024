class Resistor {
    r: number = 0;
    name: string="";
    constructor(r: number, name:string) {
        this.r = r;
        this.name=name;
    }
    getResistance(): number {
        return this.r;
    }
    getCurrent(u: number): number {
        return u / this.getResistance();
    }
    askName(): string
    {
        return this.name;
    }
}

class Switch extends Resistor {
    constructor(name:string) {
        super(0,name);
    }
    on() {
        this.r = 0;
    }
    off() {
        this.r = 1000000000;
    }
}

class ToggleSwitch extends Resistor
{
    constructor(name:string) {
        super(0,name);
    }
    toggle()
    {
        if(this.r<0.1)
        {
            this.r=10000000000000;
        }
        else
        {
            this.r=0;
        }
    }
}
class SeriesCircuit extends Resistor {
    resistors: Resistor[] = [];
    constructor(name:string) {
        super(0,name);
    }
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    askName2()
    {
        return "SeriesCircuit " + this.name + "(" + this.resistors.map(r => r.askName()).join(", ") + ")";
    }
}

let sw1: Switch = new Switch("lüliti");
let sw2: ToggleSwitch = new ToggleSwitch("sisselüliti1");
let ts1: ToggleSwitch=new ToggleSwitch("sisselüliti2");
let r1: Resistor = new Resistor(100,"takisti1");
let r2: Resistor = new Resistor(150,"takisti2");
let r3: Resistor = new Resistor(175,"takisti3");
let sc1: SeriesCircuit = new SeriesCircuit("jada1");
let sc2: SeriesCircuit = new SeriesCircuit("jada2");
sc1.push(r1);
sc2.push(r2);
sc2.push(r3);
sc1.push(sc2);
sc1.push(ts1);
console.log(sc1.getResistance());
console.log(sc1.getCurrent(12));


console.log(sw1.getResistance());
sw1.off();
console.log(sw1.getResistance());
sw1.on();
console.log(sw1.getResistance());
console.log(sw2.getResistance());
sw2.toggle();
console.log(sw2.getResistance());
sw2.toggle();
console.log(sw2.getResistance());
console.log(r1.askName());
console.log(sc1.askName2());