---
sidebar_position: 4
description: Example Download for Hellblock Map
---

# Hellblock
![Starting Template](/img/projects/skyblock-builder/examples/hellblock/start_template.png)
_[Download](/img/projects/skyblock-builder/examples/downloads/1.16.x/hellblock.zip)_

To create a Hellblock-like modpack, you can simply set the spawn dimension to `minecraft:the_nether` as shown in the
config below:

```json title="config/skyblockbuilder/common-config.json5"
{
  "Spawn": {
    "dimension": "minecraft:the_nether"
  }
}
```

This world features a standard overworld and an end dimension. The Nether serves as the "sky." Although the image
displays lava layers below the island, this implementation is from version 1.17.1, and the image was created using this
newer version. Consequently, no custom surface is present.

Additionally, I have included some structures for the Nether. Since the overworld is standard, we do not need to concern
ourselves with overworld structures—they will be generated as usual.

Thanks to [benbenlaw 🔗](https://www.curseforge.com/members/benbenlaw/projects) for permitting the use of templates from
his well-known modpack [Infernopolis 🔗](https://www.curseforge.com/minecraft/modpacks/infernopolis) for this example. I
tweaked it a bit to avoid using mod blocks.
