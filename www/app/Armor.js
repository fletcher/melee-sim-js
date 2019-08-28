define(function () {
    "use strict";
    // Start with the constructor
    function Armor(name, hitsStopped, maAdj, dxAdj) {
        this.name = name;
        this._hitsStopped = hitsStopped;
        this.maAdj = maAdj;
        this.dxAdj = dxAdj;
    }

    // Now add methods
    Armor.prototype.getName = function () {
        return this.name;
    };

    Armor.prototype.hitsStopped = function () {
        return this._hitsStopped;
    }

    Armor.prototype.getDexAdjustment = function () {
        return this.dxAdj;
    }

    Armor.prototype.toString = function () {
        return this.name + " (" + this._hitsStopped + ")";
    }


    // Automatically generated data
    Armor.NO_ARMOR = new Armor("No armor", 0, 0, 0);
    Armor.MAX_ARMOR = new Armor("Maximum Armor", 6, 6, 6);


    // And now return the constructor function
    return Armor;
});

