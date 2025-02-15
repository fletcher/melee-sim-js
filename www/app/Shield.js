define(function () {
    "use strict";
    // Start with the constructor
    function Shield(name, hitsStopped, dxAdj) {
        this.name = name;
        this._hitsStopped = hitsStopped;
        this.dxAdj = dxAdj;
    }

    // Now add methods
    Shield.prototype.getName = function () {
        return this.name;
    };

    Shield.prototype.hitsStopped = function () {
        return this._hitsStopped;
    };

    Shield.prototype.getDexAdjustment = function () {
        return this.dxAdj;
    };

    Shield.prototype.toString = function () {
        return this.name + " (" + this._hitsStopped + ")";
    }


    // Automatically generated data
    Shield.NO_SHIELD = new Shield("No shield", 0, 0);
    Shield.FLIMSY_SHIELD = new Shield("Flimsy Shield", 1, 0);


    // And now return the constructor function
    return Shield;
});

