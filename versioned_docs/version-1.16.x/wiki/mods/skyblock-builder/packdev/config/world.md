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
Settings for generating the overworld surface blocks. This follows the same format as
the [flat world generation settings 🔗](https://minecraft.fandom.com/wiki/Superflat#Preset_code_format) but will ignore
the biome configuration. This can only be set for the overworld. If the surface generation is disabled, this setting
will be ignored.

## Single Biome
### Biome
This specifies the biome for an entire dimension. You can choose the desired dimension, but if left as `default`, it
will use the [start dimension](spawn.md#dimension).

Allowed values:
- `default`
- `overworld`
- `the_nether`
- `the_end`

:::warning
Some structures require specific biomes to generate (e.g., Mansions require Dark Oak Forest). These
structures will not be generated if you have only one biome.
:::
