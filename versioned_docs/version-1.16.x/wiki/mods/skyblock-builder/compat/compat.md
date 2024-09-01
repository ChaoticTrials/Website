---
title: Existing Mod Compat
description: All mods which are already compatible
---

# Compatibility with Other Mods
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
