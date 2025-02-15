define(["./Die","./Logger"],function (Die, Logger) {
    "use strict";
    // Pattern from http://stackoverflow.com/a/10280735/1168342
    // Start with the constructor
    function Weapon(name, st, dice, modifier, isTwoHanded, isThrown, isPole) {
        if (!(this instanceof Weapon)) {
            throw new TypeError("Weapon constructor cannot be called as a function.");
        }
        this.name = name;
        this.st = st;
        this.dice = dice;
        this.modifier = modifier;
        this.isTwoHanded = isTwoHanded;
        this.isThrown = isThrown;
        this._isPole = isPole;
    }

    // Now add methods
    Weapon.prototype.getName = function () {
        return this.name;
    };
    
    Weapon.prototype.isTwoHanded = function () {
        return this.isTwoHanded;
    };

    Weapon.prototype.isThrown = function () {
        return this.isThrown;
    };

    Weapon.prototype.isPole = function () {
        return this._isPole;
    };
    
    Weapon.prototype.doDamage = function () {
        Logger.log(
                "Rolling for weapon doing "
                        + this.dice
                        + "d"
                        + ((this.modifier > 0) ? "+" : "")
                        + ((this.modifier !== 0) ? this.modifier : "")
                        + " damage.");
        var damage = 0;
        for (var i = 0; i < this.dice; i++) {
            damage += Die.roll();
        }
        damage += this.modifier;
        if (this.modifier !== 0) Logger.log(((this.modifier > 0) ? "+" : "") + this.modifier);
        if (damage < 0) damage = 0;
        Logger.log("Total weapon damage: " + damage);
        return damage;
    };

    Weapon.prototype.toString = function () {
        return this.name + " (" + this.dice + "D" + ((this.modifier > 0) ? "+" : "") + ((this.modifier !== 0) ? this.modifier : "") + ")";
    };


    // Automatically generated data
    Weapon.NONE = new Weapon("None", 0, 0, 0, 0, 0, 0);
    Weapon.BAT = new Weapon("Baseball Bat", 7, 1, -3, 0, 0, 0);


    return Weapon;
});

