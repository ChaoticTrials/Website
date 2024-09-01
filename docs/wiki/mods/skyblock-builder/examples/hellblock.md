---
sidebar_position: 4
description: Example Download for Hellblock Map
---

# Hellblock
![Starting Template](/img/projects/skyblock-builder/examples/hellblock/start_template.png)
_[Download](/img/projects/skyblock-builder/examples/downloads/1.17.x/hellblock.zip)_

To create a Hellblock-like modpack, you can simply set the spawn dimension to `the_nether` as shown in the config below:

```json title="config/skyblockbuilder/common-config.json5"
{
  "Spawn": {
    "dimension": "the_nether"
  }
}
```

This world will have a default overworld and a default end. The Nether is the "sky" and is filled with 10 layers of
lava. Some structures have also been added to the Nether. Since the overworld is default, we don't need to worry about
its structures, and they will be generated as normal.

Thanks to [benbenlaw 🔗](https://www.curseforge.com/members/benbenlaw/projects) for permitting the use of templates from
his well-known modpack [Infernopolis 🔗](https://www.curseforge.com/minecraft/modpacks/infernopolis) for this example. I
tweaked it a bit to avoid using mod blocks.
