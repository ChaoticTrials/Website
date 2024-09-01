---
description: Defining a default start inventory
---

# Inventory
## Clear Inventory
If this option is selected, the user's inventory will be deleted when joining the world for the first time. This is
useful if you don't want other mods to give the player items, such as guide books.

:::note
This option will not affect the [starting inventory](#starting-inventory).
:::

## Dropping Inventory
If this option is selected, the user's inventory will be dropped when leaving a team.

## Starting Inventory
You can set a starting inventory by customizing the `config/skyblockbuilder/starter_item.json` file. These items will be
given to the player only when they initially join the world, not when joining a team. You can also assign items to
specific slots using the `Slot` key.

You can export your inventory by using the command `/skyblock inventory export`, which will create a new file in the
`skyblock_exports` folder containing the current inventory and the corresponding slots.

Available values for the slots are:
- `mainhand` (default)
- `offhand`
- `head`
- `chest`
- `legs`
- `feet`

A sample configuration file might look like this:

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

If you want all other items to be deleted, you can set the `inventory.clear` configuration option to `true`. This will
remove items like guide books or other unwanted items, allowing you to only include desired items in the starter
inventory without modifying all other configurations.
