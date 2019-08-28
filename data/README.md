Update by Fletcher T. Penney to make it easier to update core data.  The included data (`Armor.tsv`, `Shield.tsv`, and `Weapon.tsv`) are obviously fake.  You'll need to enter the data from the actual game yourself, as it may be considered copyright infringement to include that data in tabular form here.

Melee and The Fantasy Trip:In The Labryinth are Copyright 2018 by Steve Jackson Games Incorporated.  No affiliation or endorsement is implied.

The core data is described in tab separated data (easily edited with a text editor or even a spreadsheet program.  Just don't use CSV.)

The `build.sh` script converts these tab separated files into JSON, and then uses the JSON to populate Mustache templates, rebuilding the javascript files.

It also creates a new method that automatically generates every valid combination of attributes, armor, shield, and weapon.  This is a *lot* of combinations.

You only need to run `build.sh` if you have modified the tsv files.

You need the following utilities installed for `build.sh` to run:

*	[magnum](https://github.com/fletcher/magnum)
*	[tdp](https://github.com/fletcher/tdp)