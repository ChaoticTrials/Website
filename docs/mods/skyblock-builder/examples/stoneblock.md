---
sidebar_position: 2
---

# Stoneblock
![Starting template](/img/projects/skyblock-builder/examples/stoneblock/start_template.png)
_[Download](/img/projects/skyblock-builder/examples/downloads/1.16.x/stoneblock.zip)_

To create a stoneblock like modpack, you can simply set the surface settings as you can see in the config below.

`config/skyblockbuilder/common-config.json5`:
```json
{  
  "World": {
    "surface": true,
    "surfaceSettings": "minecraft:bedrock,254*minecraft:stone,minecraft:bedrock"
  }
}
```

The download file will also set the default world type to `Skyblock`. It will generate Bedrock at top and bottom of the
dimension. It has only one spawn point. A starting inventory is included, too. Here you can see it:

![Starting item](/img/projects/skyblock-builder/examples/stoneblock/start_item.png)
```json
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