var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (inches) {
        return inches / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
