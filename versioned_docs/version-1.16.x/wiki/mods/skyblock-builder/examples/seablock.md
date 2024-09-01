---
sidebar_position: 3
description: Example Download for Seablock map
---

# Seablock

![Starting template](/img/projects/skyblock-builder/examples/seablock/start_template.png)
_[Download](/img/projects/skyblock-builder/examples/downloads/1.16.x/seablock.zip)_

To create a seablock like modpack, you can simply set the surface settings as you can see in the config below.

```json title="config/skyblockbuilder/common-config.json5"
{
  "World": {
    "surface": true,
    "surfaceSettings": "minecraft:bedrock,100*minecraft:sandstone,4*minecraft:sand,23*minecraft:water"
  }
}
```

I added multiple sandstone layers for the image. Additionally, the download includes a few more changes. Some features
and structures are enabled, and the spawn height is set to position the top of the island above the water layers.

Here you can also see the single biome option. This example demonstrates multiple templates, showing how to set them up
correctly.

Thanks to [benbenlaw 🔗](https://www.curseforge.com/members/benbenlaw/projects) for permitting the use of templates from
his well-known modpack [Seaopolis 🔗](https://www.curseforge.com/minecraft/modpacks/seaopolis) for this example.