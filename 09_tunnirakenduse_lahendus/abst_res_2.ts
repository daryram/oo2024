abstract class AbstractResistor {
    abstract getResistance(): number;
    getCurrent(u: number): number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor {
    r: number = 0;
    constructor(r: number) {
        super();
        this.r = r;
    }
    getResistance(): number {
        return this.r;
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = []
    addResistor(r: AbstractResistor) {
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection{
    getResistance(): number{
        let inverseSum: number=0;
        for(let resistor of this.resistors){
            inverseSum+=1/resistor.getResistance();
        }
        return 1/inverseSum;
    }
}

class seriesCircuit extends MultipleConnection{
    getResistance(): number{
        let sum: number=0;
        for(let resistor of this.resistors){
            sum += resistor.getResistance();
        }
        return sum;
    }
}


let p:ParallelConnection=new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(110));
console.log(p.getResistance());
console.log(p.getCurrent(5));

//Paralleelühendus kahe 110-oomise takistiga
let p1:ParallelConnection=new ParallelConnection();
p1.addResistor(new Resistor(110));
p1.addResistor(new Resistor(110));
console.log(p1.getResistance());

//Pane mõlemad paralleelühendused omakorda paralleeli
let p2:ParallelConnection=new ParallelConnection();
p2.addResistor(p);
p2.addResistor(p1);
console.log(p2);
console.log(p2.getResistance());

//Jadaühendus
let s:seriesCircuit = new seriesCircuit();
s.addResistor(new Resistor(220));
s.addResistor(new Resistor(110));
console.log(s);
console.log(s.getResistance());

let s1:seriesCircuit = new seriesCircuit();
s1.addResistor(new Resistor(220));
s1.addResistor(new Resistor(440));
console.log(s1);
console.log(s1.getResistance());

let s2:seriesCircuit = new seriesCircuit();
s2.addResistor(s);
s2.addResistor(s1);
console.log(s2);
console.log(s2.getResistance());