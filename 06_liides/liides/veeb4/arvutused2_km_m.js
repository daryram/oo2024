var KmtoM = /** @class */ (function () {
    function KmtoM() {
    }
    KmtoM.prototype.calculate = function (km) {
        return km * 0.27778;
    };
    KmtoM.prototype.inputUnit = function () {
        return "km/h";
    };
    KmtoM.prototype.outputUnit = function () {
        return "m/s";
    };
    return KmtoM;
}());
