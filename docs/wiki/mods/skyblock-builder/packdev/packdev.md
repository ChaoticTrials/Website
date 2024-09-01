---
description: Important information for pack developers
---

# Main Setup
## Setting World Type on Single Player as Default
To set the world type to `skyblockbuilder:custom_skyblock` when playing single player, start the game once and it will
generate a config file named `forge-common.toml`. Update the only value in the file as follows:

```toml title="config/forge-common.toml"
[general]
   defaultWorldType = "skyblockbuilder:custom_skyblock"
```

Alternatively, you can manually create the `forge-common.toml` file in the config directory with the above content.

## Setting World Type on Server as Default
For servers, you can provide a custom `server.properties` file by setting the `level-type` to
`skyblockbuilder:custom_skyblock`. The rest of the setup is the same as
in [single player](#setting-world-type-on-single-player-as-default).

## Creating a Custom Skyblock Island
1. Build an island.
2. Use the custom item `Structure Saver` from the vanilla Tools tab in the creative inventory. The output directory for
   this will be `<minecraft>/skyblock_exports/<name>.nbt`. Alternatively, use the vanilla Structure Block, noting it can
   only save islands up to 48x48x48 blocks. The output for this will be in
   `<minecraft>/saves/<world>/generated/minecraft/structures/<name>.nbt`.
3. Copy the generated file to `config/skyblockbuilder/templates/<name>.nbt`.
4. [Configure the template with a readable name and spawns](#configuring-templates) in
   `config/skyblockbuilder/templates.json5`. Multiple spawns can be defined as arrays with `[x, y, z]` coordinates
   relative to the template structure's origin (0, 0, 0). You can
   also [modify existing spawns](../user/user.md#modifying-spawns) and export them using `/skyblock spawns EXPORT`. Note:
   These commands require the world type `Skyblock`.
5. View current spawns by running `/skyblock spawns debug`.
6. Apply the new spawn points by copying them into the `config/skyblockbuilder/templates.json5` file.

## Setting Multiple Templates
To enable multiple schematics, place them in `config/skyblockbuilder/templates/`. Users can select these templates by
pressing the `Customize` button in the world options screen or by changing the schematic with the
`/skyblock manage islandShape <template>` command, where `<template>` is the name specified in
the [next chapter](#configuring-templates). **IMPORTANT**: Do not name any schematic files `template.nbt` to avoid
overwriting the default schematic.

## Configuring Templates
To configure templates and set spawn points, edit `config/skyblockbuilder/templates.json5` as detailed
in [Creating a Custom Skyblock Island](#creating-a-custom-skyblock-island). The `spawns` option holds multiple spawn
point sets:

```json
{
   "spawns": {
      "default": [
         [ 6, 3, 5 ]
      ]
   }
}
```

Each object key (e.g., `default`) is referenced by the `templates` section:

```json
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

- `name`: Displayed name in the `Customize` screen.
- `file`: Filename of the template.
- `spawns`: Spawn configuration name from the `spawns` option.

Multiple configurations with the same file and spawns can be differentiated by their names.

:::note
If spawning inside a block, add the block to the
`#skyblockbuilder:additional_valid_spawns` [block tag](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_data_pack#Tags).
:::

## Loot Chests on Island
To add a loot chest to an island, set the NBT data to the chest with the command:

```shell
/data merge block <x y z> {LootTable: modid:path/to/loot_table}
```

:::warning
Do not open the chest after merging this data.
:::
