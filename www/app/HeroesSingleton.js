﻿define(function () {
    "use strict";
    // http://stackoverflow.com/a/9753841/1168342
    var listHeight = 15;
    var heroesListJSON =
        [
            { "name": "001:ST8;DX16;DAGGER;NO_ARMOR;SMALL_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "002:ST8;DX16;DAGGER;LEATHER;SMALL_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "003:ST8;DX16;DAGGER;CHAIN;SMALL_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "004:ST8;DX16;DAGGER;PLATE;SMALL_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "005:ST8;DX16;DAGGER;NO_ARMOR;LARGE_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "006:ST8;DX16;DAGGER;LEATHER;LARGE_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "007:ST8;DX16;DAGGER;CHAIN;LARGE_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "008:ST8;DX16;DAGGER;PLATE;LARGE_SHIELD", "st": 8, "dx": 16, "weapon": "DAGGER", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "009:ST9;DX15;RAPIER;NO_ARMOR;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "010:ST9;DX15;RAPIER;LEATHER;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "011:ST9;DX15;RAPIER;CHAIN;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "012:ST9;DX15;RAPIER;PLATE;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "013:ST9;DX15;RAPIER;NO_ARMOR;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "014:ST9;DX15;RAPIER;LEATHER;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "015:ST9;DX15;RAPIER;CHAIN;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "016:ST9;DX15;RAPIER;PLATE;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "RAPIER", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "017:ST9;DX15;CLUB;NO_ARMOR;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "018:ST9;DX15;CLUB;LEATHER;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "019:ST9;DX15;CLUB;CHAIN;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "020:ST9;DX15;CLUB;PLATE;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "021:ST9;DX15;CLUB;NO_ARMOR;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "022:ST9;DX15;CLUB;LEATHER;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "023:ST9;DX15;CLUB;CHAIN;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "024:ST9;DX15;CLUB;PLATE;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "CLUB", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "025:ST9;DX15;JAVELIN;NO_ARMOR;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "026:ST9;DX15;JAVELIN;LEATHER;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "027:ST9;DX15;JAVELIN;CHAIN;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "028:ST9;DX15;JAVELIN;PLATE;SMALL_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "029:ST9;DX15;JAVELIN;NO_ARMOR;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "030:ST9;DX15;JAVELIN;LEATHER;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "031:ST9;DX15;JAVELIN;CHAIN;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "032:ST9;DX15;JAVELIN;PLATE;LARGE_SHIELD", "st": 9, "dx": 15, "weapon": "JAVELIN", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "033:ST10;DX14;HAMMER;NO_ARMOR;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "034:ST10;DX14;HAMMER;LEATHER;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "035:ST10;DX14;HAMMER;CHAIN;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "036:ST10;DX14;HAMMER;PLATE;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "037:ST10;DX14;HAMMER;NO_ARMOR;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "038:ST10;DX14;HAMMER;LEATHER;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "039:ST10;DX14;HAMMER;CHAIN;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "040:ST10;DX14;HAMMER;PLATE;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "HAMMER", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "041:ST10;DX14;CUTLASS;NO_ARMOR;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "042:ST10;DX14;CUTLASS;LEATHER;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "043:ST10;DX14;CUTLASS;CHAIN;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "044:ST10;DX14;CUTLASS;PLATE;SMALL_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "045:ST10;DX14;CUTLASS;NO_ARMOR;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "046:ST10;DX14;CUTLASS;LEATHER;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "047:ST10;DX14;CUTLASS;CHAIN;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "048:ST10;DX14;CUTLASS;PLATE;LARGE_SHIELD", "st": 10, "dx": 14, "weapon": "CUTLASS", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "049:ST11;DX13;SHORTSWORD;NO_ARMOR;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "050:ST11;DX13;SHORTSWORD;LEATHER;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "051:ST11;DX13;SHORTSWORD;CHAIN;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "052:ST11;DX13;SHORTSWORD;PLATE;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "053:ST11;DX13;SHORTSWORD;NO_ARMOR;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "054:ST11;DX13;SHORTSWORD;LEATHER;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "055:ST11;DX13;SHORTSWORD;CHAIN;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "056:ST11;DX13;SHORTSWORD;PLATE;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "SHORTSWORD", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "057:ST11;DX13;MACE;NO_ARMOR;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "058:ST11;DX13;MACE;LEATHER;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "059:ST11;DX13;MACE;CHAIN;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "060:ST11;DX13;MACE;PLATE;SMALL_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "061:ST11;DX13;MACE;NO_ARMOR;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "062:ST11;DX13;MACE;LEATHER;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "063:ST11;DX13;MACE;CHAIN;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "064:ST11;DX13;MACE;PLATE;LARGE_SHIELD", "st": 11, "dx": 13, "weapon": "MACE", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "065:ST11;DX13;SPEAR;NO_ARMOR;NO_SHIELD", "st": 11, "dx": 13, "weapon": "SPEAR", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "066:ST11;DX13;SPEAR;LEATHER;NO_SHIELD", "st": 11, "dx": 13, "weapon": "SPEAR", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "067:ST11;DX13;SPEAR;CHAIN;NO_SHIELD", "st": 11, "dx": 13, "weapon": "SPEAR", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "068:ST11;DX13;SPEAR;PLATE;NO_SHIELD", "st": 11, "dx": 13, "weapon": "SPEAR", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "069:ST12;DX12;BROADSWORD;NO_ARMOR;SMALL_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "070:ST12;DX12;BROADSWORD;LEATHER;SMALL_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "071:ST12;DX12;BROADSWORD;CHAIN;SMALL_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "072:ST12;DX12;BROADSWORD;PLATE;SMALL_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "073:ST12;DX12;BROADSWORD;NO_ARMOR;LARGE_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "074:ST12;DX12;BROADSWORD;LEATHER;LARGE_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "075:ST12;DX12;BROADSWORD;CHAIN;LARGE_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "076:ST12;DX12;BROADSWORD;PLATE;LARGE_SHIELD", "st": 12, "dx": 12, "weapon": "BROADSWORD", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "077:ST13;DX11;MORNINGSTAR;NO_ARMOR;SMALL_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "NO_ARMOR", "shield": "SMALL_SHIELD" },
            { "name": "078:ST13;DX11;MORNINGSTAR;LEATHER;SMALL_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "LEATHER", "shield": "SMALL_SHIELD" },
            { "name": "079:ST13;DX11;MORNINGSTAR;CHAIN;SMALL_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "CHAIN", "shield": "SMALL_SHIELD" },
            { "name": "080:ST13;DX11;MORNINGSTAR;PLATE;SMALL_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "PLATE", "shield": "SMALL_SHIELD" },
            { "name": "081:ST13;DX11;MORNINGSTAR;NO_ARMOR;LARGE_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "NO_ARMOR", "shield": "LARGE_SHIELD" },
            { "name": "082:ST13;DX11;MORNINGSTAR;LEATHER;LARGE_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "LEATHER", "shield": "LARGE_SHIELD" },
            { "name": "083:ST13;DX11;MORNINGSTAR;CHAIN;LARGE_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "CHAIN", "shield": "LARGE_SHIELD" },
            { "name": "084:ST13;DX11;MORNINGSTAR;PLATE;LARGE_SHIELD", "st": 13, "dx": 11, "weapon": "MORNINGSTAR", "armor": "PLATE", "shield": "LARGE_SHIELD" },
            { "name": "085:ST13;DX11;HALBERD;NO_ARMOR;NO_SHIELD", "st": 13, "dx": 11, "weapon": "HALBERD", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "086:ST13;DX11;HALBERD;LEATHER;NO_SHIELD", "st": 13, "dx": 11, "weapon": "HALBERD", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "087:ST13;DX11;HALBERD;CHAIN;NO_SHIELD", "st": 13, "dx": 11, "weapon": "HALBERD", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "088:ST13;DX11;HALBERD;PLATE;NO_SHIELD", "st": 13, "dx": 11, "weapon": "HALBERD", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "089:ST14;DX10;TWO_HANDED_SWORD;NO_ARMOR;NO_SHIELD", "st": 14, "dx": 10, "weapon": "TWO_HANDED_SWORD", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "090:ST14;DX10;TWO_HANDED_SWORD;LEATHER;NO_SHIELD", "st": 14, "dx": 10, "weapon": "TWO_HANDED_SWORD", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "091:ST14;DX10;TWO_HANDED_SWORD;CHAIN;NO_SHIELD", "st": 14, "dx": 10, "weapon": "TWO_HANDED_SWORD", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "092:ST14;DX10;TWO_HANDED_SWORD;PLATE;NO_SHIELD", "st": 14, "dx": 10, "weapon": "TWO_HANDED_SWORD", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "093:ST15;DX9;BATTLEAXE;NO_ARMOR;NO_SHIELD", "st": 15, "dx": 9, "weapon": "BATTLEAXE", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "094:ST15;DX9;BATTLEAXE;LEATHER;NO_SHIELD", "st": 15, "dx": 9, "weapon": "BATTLEAXE", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "095:ST15;DX9;BATTLEAXE;CHAIN;NO_SHIELD", "st": 15, "dx": 9, "weapon": "BATTLEAXE", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "096:ST15;DX9;BATTLEAXE;PLATE;NO_SHIELD", "st": 15, "dx": 9, "weapon": "BATTLEAXE", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "097:ST15;DX9;PIKE_AXE;NO_ARMOR;NO_SHIELD", "st": 15, "dx": 9, "weapon": "PIKE_AXE", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "098:ST15;DX9;PIKE_AXE;LEATHER;NO_SHIELD", "st": 15, "dx": 9, "weapon": "PIKE_AXE", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "099:ST15;DX9;PIKE_AXE;CHAIN;NO_SHIELD", "st": 15, "dx": 9, "weapon": "PIKE_AXE", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "100:ST15;DX9;PIKE_AXE;PLATE;NO_SHIELD", "st": 15, "dx": 9, "weapon": "PIKE_AXE", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "101:ST16;DX8;BATTLEAXE;NO_ARMOR;NO_SHIELD", "st": 16, "dx": 8, "weapon": "BATTLEAXE", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "102:ST16;DX8;BATTLEAXE;LEATHER;NO_SHIELD", "st": 16, "dx": 8, "weapon": "BATTLEAXE", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "103:ST16;DX8;BATTLEAXE;CHAIN;NO_SHIELD", "st": 16, "dx": 8, "weapon": "BATTLEAXE", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "104:ST16;DX8;BATTLEAXE;PLATE;NO_SHIELD", "st": 16, "dx": 8, "weapon": "BATTLEAXE", "armor": "PLATE", "shield": "NO_SHIELD" },
            { "name": "105:ST16;DX8;PIKE_AXE;NO_ARMOR;NO_SHIELD", "st": 16, "dx": 8, "weapon": "PIKE_AXE", "armor": "NO_ARMOR", "shield": "NO_SHIELD" },
            { "name": "106:ST16;DX8;PIKE_AXE;LEATHER;NO_SHIELD", "st": 16, "dx": 8, "weapon": "PIKE_AXE", "armor": "LEATHER", "shield": "NO_SHIELD" },
            { "name": "107:ST16;DX8;PIKE_AXE;CHAIN;NO_SHIELD", "st": 16, "dx": 8, "weapon": "PIKE_AXE", "armor": "CHAIN", "shield": "NO_SHIELD" },
            { "name": "108:ST16;DX8;PIKE_AXE;PLATE;NO_SHIELD", "st": 16, "dx": 8, "weapon": "PIKE_AXE", "armor": "PLATE", "shield": "NO_SHIELD" }
        ];
        
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
