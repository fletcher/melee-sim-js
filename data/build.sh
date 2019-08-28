#!/bin/sh

# Convert Tab Separated Files to JSON
tdp -f tsv Armor.tsv > Armor.json
tdp -f tsv Attributes.tsv > Attributes.json
tdp -f tsv Shield.tsv > Shield.json
tdp -f tsv Weapon.tsv > Weapon.json


# Rebuild Javascript files
magnum Armor.json Armor.js.mustache > ../www/app/Armor.js
magnum Shield.json Shield.js.mustache > ../www/app/Shield.js
magnum Weapon.json Weapon.js.mustache > ../www/app/Weapon.js


# Bootstrap Heroes List
echo "{ \"attributes\" : " > Aggregate.json
cat Attributes.json >> Aggregate.json
echo ", \"armor\" : " >> Aggregate.json
cat Armor.json >> Aggregate.json
echo ", \"shield\" : " >> Aggregate.json
cat Shield.json >> Aggregate.json
echo ", \"weapon\" : " >> Aggregate.json
cat Weapon.json >> Aggregate.json
echo "}" >> Aggregate.json

magnum Aggregate.json bootstrap.mustache > ../www/app/HeroesSingleton.js