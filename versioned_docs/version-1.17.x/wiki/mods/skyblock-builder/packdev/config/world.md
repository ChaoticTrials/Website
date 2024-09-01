---
description: Shape the world
---

# World
## Biome Range
Defines the radius for biome repetition. By default, an area of 8192x8192 will encompass all the biomes in the world. If
a biome does not appear within this area, it is excluded from the world. Biomes repeat beyond an invisible border. This
feature can be disabled, preventing biome repetition.

:::warning
A small biome range may prevent certain structures from generating, especially if specific biomes are
required. You can mitigate this issue by decreasing the [structure modifier](#structure-modifier).
:::

## Island Distance
Specifies the distance between two islands. If `the_nether` is selected as the [start dimension](spawn.md#dimension),
this distance is divided by 8.

## Offset
Determines the offset from coordinates (0, 0) for island generation. This can be utilized to generate islands centrally
within .mca files.

## Sea Height
Sets the sea level in the world. Note that this does not affect the water height within the world but does influence
spawn heights for entities like squids.

## Structure Modifier
Adjusts the spacing and separation of structures through a multiplier. Values for spacing and separation can be defined
via a data pack. For more details, refer to
the [biome_source.structures.structures documentation 🔗](https://minecraft.fandom.com/wiki/Custom#Generator_types).

- Minimal spacing is set to 1 if the modifier reduces it below this value.
- Minimal separation is set to 0 if the modifier reduces it below this value.

:::note
This configuration option requires a full restart if you have already joined a world.
:::

## Surface
Configures the block settings for generating surfaces across different dimensions. Follows a format similar
to [flat world generation settings 🔗](https://minecraft.fandom.com/wiki/Superflat#Preset_code_format), but ignores the
biome setting. These settings can be applied to each dimension. To generate a completely void space, set the dimension
to an empty string instead of removing it from the list. If surface generation is disabled, these settings are ignored.

## Single Biome
### Biome
Specifies the biome for an entire dimension. A list of all available structures can be found in
`config/skyblockbuilder/data/biomes.txt`. You can define the desired dimension, and if set to `null`,
the [start dimension](spawn.md#dimension) will be used.

:::warning
Some structures require specific biomes to generate (e.g., Mansions require Dark Oak Forest). These
structures will not be generated if you have only one biome.
:::
