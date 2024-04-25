var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor(name) {
        this.name = name;
    }
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(name) {
        return _super.call(this, name) || this;
    }
    Resistor.prototype.draw = function (g, startx, y) {
        g.beginPath();
        g.moveTo(startx, y);
        g.lineTo(startx + this.getWidth() / 4, y);
        g.rect(startx + this.getWidth() / 4, y - 10, this.getWidth() / 2, 20);
        g.fillText(this.name, startx + this.getWidth() / 4 + 1, y + 2);
        g.moveTo(startx + this.getWidth() * 3 / 4, y);
        g.lineTo(startx + this.getWidth(), y);
        g.stroke();
    };
    Resistor.prototype.getWidth = function () { return 50; };
    return Resistor;
}(AbstractResistor));
