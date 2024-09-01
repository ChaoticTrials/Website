---
title: Existing Mod Compatibility
description: All mods that are already compatible
---

# Compatibility with Other Mods
## Curios
This mod is compatible with [Curios 🔗](https://modrinth.com/mod/curios). This means that items from the Curios inventory
will be dropped when leaving a team, provided that the [config](../packdev/config/inventory.md#dropping-inventory) is
also enabled.

## MineMention
This mod is compatible with [MineMention 🔗](https://modrinth.com/mod/minemention). To write in the team's chat, you can
use `skyblockbuilder:sky_team` in the MineMention config file. This should look like this:

```json title="config/minemention.json5"
{
  "mentions": {
    "everyone": "minemention:everyone",
    "here": "minemention:here",
    "team": "skyblockbuilder:sky_team"
  }
}
```
