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
4. Configure possible spawn points in `config/skyblockbuilder/spawns.json`. You can define multiple spawn points, each
   represented as an array `[x, y, z]` relative to the origin `[0, 0, 0]` of the template structure. Additionally, you
   can [modify existing spawns](../user/user.md#modifying-spawns) and export them using the `/skyblock spawns EXPORT`
   command. Note: These commands require the world type `Skyblock`.
5. To view your current spawns, use the `/reload` command to reload the configuration. Then, execute the
   `/skyblock spawns true` command to display all possible spawn points.
6. Repeat steps 4 and 5 until everything is correctly configured.

## Setting Multiple Templates
You can set multiple schematics by placing them in `config/skyblockbuilder/templates/`. Users can select these
schematics by pressing the `Customize` button on the world options screen or by using the command
`/skyblock manage islandShape <template>`.

:::warning
Avoid naming any schematic files `template.nbt` because this file will be overwritten by the default
schematic located at `config/skyblockbuilder/template.nbt`.
:::

## Possible Spawns
Possible spawns are configured in `config/skyblockbuilder/spawns.json`. For each player, the game randomly selects a
spawn position from the list and places the player at that position. This is particularly useful for large islands when
adding multiple players to the same team. You can also export your current spawn points with the
`/skyblock spawns EXPORT` command. First, make sure to [modify spawns](../user/user.md#modifying-spawns) as needed. Your
exported spawn points will be saved in `skyblock_exports/spawns.json`. Copy this file to the main config folder and
overwrite the existing one to apply your new spawns.

If you spawn inside a block, consider adding that block to
the [block tag 🔗](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_data_pack#Tags)
`#skyblockbuilder:additional_valid_spawns`.

## Loot Chests on Island
To add a loot chest to an island, set the NBT data to the chest with the command:

```shell
/data merge block <x y z> {LootTable: modid:path/to/loot_table}
```

:::warning
Do not open the chest after merging this data.
:::
