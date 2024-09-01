---
title: Existing Mod Compat
description: All mods which are already compatible
---

# Compatability with other mods
## MineMention
This mod is compatible with [MineMention 🔗](https://modrinth.com/mod/minemention). To write in the 
teams chat, you can use `skyblockbuilder:sky_team` in MineMention config file. This would look like this:
```json title="config/minemention.json5"
{
  "mentions": {
    "everyone": "minemention:everyone",
    "here": "minemention:here",
    "team": "skyblockbuilder:sky_team"
  }
}
```