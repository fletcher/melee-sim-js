define(function () {
    "use strict";
    // http://stackoverflow.com/a/9753841/1168342
    var listHeight = 15;
    var heroesListJSON = [];

    var aggregate =  {
		"attributes" : [
			{
				"ST" : 8,
				"DX" : 16
			},
			{
				"ST" : 9,
				"DX" : 15
			},
			{
				"ST" : 10,
				"DX" : 14
			},
			{
				"ST" : 11,
				"DX" : 13
			},
			{
				"ST" : 12,
				"DX" : 12
			},
			{
				"ST" : 13,
				"DX" : 11
			},
			{
				"ST" : 14,
				"DX" : 10
			},
			{
				"ST" : 15,
				"DX" : 9
			},
			{
				"ST" : 16,
				"DX" : 8
			},
			{}
		],
		"armor" : [
			{
				"ID": "NO_ARMOR",
				"Name": "No armor",
				"HitsStopped": 0,
				"MAAdj": 0,
				"DXAdj": 0
			},
			{
				"ID": "MAX_ARMOR",
				"Name": "Maximum Armor",
				"HitsStopped": 6,
				"MAAdj": 6,
				"DXAdj": 6
			},
			{}
		],
		"shield" : [
			{
				"ID": "NO_SHIELD",
				"Name": "No shield",
				"HitsStopped": 0,
				"DXAdj": 0
			},
			{
				"ID": "FLIMSY_SHIELD",
				"Name": "Flimsy Shield",
				"HitsStopped": 1,
				"DXAdj": 0
			},
			{}
		],
		"weapon" : [
			{
				"ID": "NONE",
				"Name": "None",
				"MinST": 0,
				"Dice": 0,
				"Modifier": 0,
				"TwoHands": 0,
				"Thrown": 0,
				"Pole": 0
			},
			{
				"ID": "BAT",
				"Name": "Baseball Bat",
				"MinST": 7,
				"Dice": 1,
				"Modifier": -3,
				"TwoHands": 0,
				"Thrown": 0,
				"Pole": 0
			},
			{}
		]
	};


	// Build list of heroes
	var counter = 100;

	for (var i = 0; i < aggregate.attributes.length; i++) {
		if (aggregate.attributes[i].ST) {
			for (var j = 1; j < aggregate.weapon.length; j++) {
				if (aggregate.weapon[j].Name) {
					for (var k = 0; k < aggregate.armor.length; k++) {
						if (aggregate.armor[k].Name) {
							for (var l = 0; l < aggregate.shield.length; l++) {
								if (aggregate.shield[l].Name) {
									if (aggregate.attributes[i].ST >= aggregate.weapon[j].MinST) {
										// Can hero wield this weapon?
										if (!(aggregate.weapon[j].TwoHands && aggregate.shield[l].ID != "NO_SHIELD")) {
											// No shield with two-handed weapons
											var hero = { "name" : counter + ":ST" + aggregate.attributes[i].ST
												+ ";DX" + aggregate.attributes[i].DX
												+ ";" + aggregate.weapon[j].Name
												+ ";" + aggregate.armor[k].Name
												+ ";" + aggregate.shield[l].Name,
												"st" : aggregate.attributes[i].ST,
												"dx" : aggregate.attributes[i].DX,
												"weapon" : aggregate.weapon[j].ID,
												"armor" : aggregate.armor[k].ID,
												"shield" : aggregate.shield[l].ID
											};

											heroesListJSON.push(hero);
											counter++;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

        
    //    console.log("Loading HeroesSingleton");
    return {
        getHeroesListJSON: function () {
            return heroesListJSON;
        },
        getListHeight: function () {
            return listHeight;
        }
    }

});
