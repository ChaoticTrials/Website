---
description: All executable commands available to normal users.
---

# End User Commands
## Creating Your Own Island
To create an island using your own command, you can use `/skyblock create <name> <players>`.
This will create a team and add the specified players to it. If no players are mentioned, the user executing the command will be added to the team. If no name is provided, a random name will be generated.

## Renaming a Team Island
You can rename your team by using `/skyblock team <new name> <team name>`. The `<team name>` parameter is optional. This command can be executed by any team member. Users with permission level 2 can also rename other teams.

## Modifying Spawns
If enabled in the configuration, you can modify spawns for your team:
- Add a spawn: `/skyblock team spawns add <pos>`. If no position is specified, the current position will be used.
- Remove a spawn: `/skyblock team spawns remove <pos>`. As before, the position is optional.
- For users with permission level 2, to reset spawn points to their default settings: `/skyblock team spawns reset <team>`

:::note
When adding spawns, ensure you are within the range specified in the configuration.
:::

## Teleporting Back to Home Island
If the home command is enabled in the config, you can teleport back to your team's island using `/skyblock home`.

## Teleporting to Spawn Island
If teleporting to spawn is enabled in the config, you can teleport to the spawn island with `/skyblock spawn`.
