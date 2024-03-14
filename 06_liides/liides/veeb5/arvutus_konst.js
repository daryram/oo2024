var AXplusB = /** @class */ (function () {
    function AXplusB(coeficient, inputUnitType, outputUnitType) {
        this.coeficient = coeficient;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    AXplusB.prototype.calculate = function (x) {
        return this.coeficient * x;
    };
    AXplusB.prototype.inputUnit = function () { return this.inputUnitType; };
    AXplusB.prototype.outputUnit = function () { return this.outputUnitType; };
    return AXplusB;
}());
