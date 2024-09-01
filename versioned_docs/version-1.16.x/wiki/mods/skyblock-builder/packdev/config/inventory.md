---
description: Defining a default start inventory
---

# Inventory
## Clear inventory
If this option is selected, the users inventory will be deleted when joining the world the first time. This is useful
if you don't want that other mods give the player items like guide books.

Notice: This option will not affect the [starting inventory](#starting-inventory).

## Dropping inventory
If this option is selected, the users inventory will be dropped when leaving a team.

## Starting inventory
You can set a starting inventory by customising `config/skyblockbuilder/starter_item.json`. These items will be given to 
the player only on initial joining world, not when joining a team. You can also set the items to a special slot with key
`Slot`.

Available values for the slots are:

- `mainhand` (default)
- `offhand`
- `head`
- `chest`
- `legs`
- `feet`

The config could look like this:
```json title="config/skyblockbuilder/starter_item.json"
{
  "items": [
    {
      "item": "minecraft:diamond_pickaxe",
      "nbt": {
        "Unbreakable": true
      }
    },
    {
      "item": "minecraft:bread",
      "count": 32,
      "Slot": "offhand"
    }
  ]
}
```

If you want that every other item will be deleted, you can simply set the config option `inventory.clear` to true. This 
will delete items like guide books or other things. That way, you don't have to go through all configs to enable these
items and could just add them to the starter items.