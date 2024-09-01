---
description: Important information for pack developers
---

# Main setup
## Setting world type on single player as default
You simply start the game once. It will generate a config called `forge-common.toml`. Change the only value in this
config to `skyblockbuilder:custom_skyblock`, or use this example and create a file called `forge-common.toml` in the
config directory with this content:
```toml title="config/forge-common.toml"
[general]
   defaultWorldType = "skyblockbuilder:custom_skyblock"
```

## Setting world type on server as default
If you want to provide a custom `server.properties` file, set the `level-type` to `skyblockbuilder:custom_skyblock`.
Otherwise, it's the same as in [single player](#setting-world-type-on-single-player-as-default).

## Creating a custom skyblock island
1. Build an island.
2. Use the custom item `Structure Saver` from the vanilla Tools tab in creative inventory. The output directory for this
   is `<minecraft>/skyblock_exports/<name>.nbt`.
   Alternatively, you can also use the vanilla Structure Block. Keep in mind that this can only save islands up to
   48x48x48 blocks and the output is in `<minecraft>/saves/<world>/generated/minecraft/structures/<name>.nbt`.
3. Copy the generated file from its directory (see previous step) to `config/skyblockbuilder/templates/<name>.nbt`.
4. [Configure the template with a better readable name and spawns](#configuring-templates) in
   `config/skyblockbuilder/templates.json5`. There can be multiple spawns, each one is an array with `[x, y, z]`
   relative to the 0, 0, 0 from the template structure. You can also
   [modify existing spawns](../user/user.md#modify-spawns) and export them with `/skyblock spawns EXPORT`.
   IMPORTANT: You need to be in a world with world-type `Skyblock` to use the commands.
5. To view your current spawns, you need to run `/skyblock spawns debug` to view all possible spawn points.
6. To apply the new spawn points to your template, copy the exported spawn points (you need to open the file) into the
   file `config/skyblockbuilder/templates.json5` where needed.

## Setting multiple templates
You can set multiple schematics by putting them into `config/skyblockbuilder/templates/`. These schematics can the user
use by pressing the `Customize` button in world options screen or changing the schematic with command
`/skyblock manage islandShape <template>` where `<template>` is the name specified in
[next chapter](#configuring-templates).

**IMPORTANT**: DO NOT name any of these schematic files `template.nbt` because it would be overwritten by the default
schematic in `config/skyblockbuilder/template.nbt`.

## Configuring templates
As described in [Creating a custom skyblock island](#creating-a-custom-skyblock-island), you can improve the readability
of templates and set the spawn points for each template in the config.
There you have 2 options. First the `spawns`:
```json title="config/skyblockbuilder/templates.json5"
{
   "spawns": {
      "default": [
         [ 6, 3, 5 ]
      ]
   }
}
```
This option holds multiple objects. The key (here `default`) is important for the `templates` option in the next step.
You can have multiple entries, but keep in mind that **no key** can be used twice! The content of each object is an
array. This array contains the spawn positions. The spawn positions are formatted this way:
```
[ x, y, z ]
```

Now the `templates`:
```json title="config/skyblockbuilder/templates.json5"
{
   "templates": [
    {
      "name": "default",
      "file": "default.nbt",
      "spawns": "default"
    }
  ]
}
```

- The `name` is the name displayed in the `Customize` screen when selecting the world-type.
- The `file` is the name of the file for that template.
- The `spawns` is the spawn configuration name from the `spawns` option.
  You can have the same file and the same spawns in multiple configurations. They all are only separated by the name.

**NOTE**: If you spawn inside a block, you could add this block to the
[block tag 🔗](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_data_pack#Tags)
`#skyblockbuilder:additional_valid_spawns`.

## Loot chests on island
If you want a loot chest on an island, you need to set the NBT data to the chest with the
`/data merge block <x y z> {LootTable: modid:path/to/loot_table}` command to set it as loot chest.

**WARNING**! Do not open that chest after merging this data into the chest.
