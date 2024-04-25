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

let p:ParallelConnection=new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(110));
console.log(p.getResistance());