---
sidebar_position: 2
description: Example Download for Stoneblock map
---

# Stoneblock
![Starting template](/img/projects/skyblock-builder/examples/stoneblock/start_template.png)
[Download](/img/projects/skyblock-builder/examples/downloads/1.17.x/stoneblock.zip)

To create a Stoneblock-like modpack, you can simply set the surface settings as shown in the configuration below.

```json title="config/skyblockbuilder/common-config.json5"
{
  "World": {
    "surface": true,
    "surfaceSettings": {
      "minecraft:overworld": "minecraft:bedrock,254*minecraft:stone,minecraft:bedrock",
      "minecraft:the_nether": "",
      "minecraft:the_end": ""
    }
  }
}
```

The downloaded file also sets the default world type to `Skyblock`, generating Bedrock at the top and bottom of the
dimension. There is only one spawn point, and a starting inventory is included, as shown below:
![Starting item](/img/projects/skyblock-builder/examples/stoneblock/start_item.png)
```json title="config/skyblockbuilder/starter_item.json"
{
  "items": [
    {
      "item": "minecraft:wooden_pickaxe",
      "nbt": {
        "Unbreakable": true,
        "Enchantments": [
          {
            "lvl": 2,
            "id": "minecraft:efficiency"
          }
        ],
        "display": {
          "Name": "{\"text\":\"Infinite Pickaxe\"}"
        }
      }
    }
  ]
}
```
