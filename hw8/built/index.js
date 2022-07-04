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
var Vechile = /** @class */ (function () {
    function Vechile() {
    }
    Vechile.prototype.horn = function () {
        console.log("".concat(this.name, " with ").concat(this.countOfWeels, " weels says: beep-beep"));
    };
    return Vechile;
}());
var MuscleCar = /** @class */ (function (_super) {
    __extends(MuscleCar, _super);
    function MuscleCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MuscleCar.prototype.setProperties = function (properties) {
        this.name = properties.name;
        this.countOfWeels = properties.countOfWeels;
    };
    return MuscleCar;
}(Vechile));
var corvettte = new MuscleCar();
var mustang = new MuscleCar();
corvettte.setProperties({ name: "Corvette", countOfWeels: 4 });
mustang.setProperties({ name: "Mustang", countOfWeels: 4 });
corvettte.horn();
mustang.horn();
