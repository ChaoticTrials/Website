---
description: Important information for admins
---

# Managing teams
## Operators Only
Only operators with permission level 2 or higher can make changes in the `/skyblock manage` category.

## Creating Teams
To create a team with a specific name, use the command: `/skyblock manage teams create <name>`.

If no name is provided, a random name will be generated.

For server environments, you can use: `/skyblock manage teams createAndJoin`

This will create the team and join it immediately. To automate this process on a server, place the command in a command
block triggered by the user:
`/execute as @p run skyblock manage teams createAndJoin`

## Deleting Teams
To delete a team with a specific name, use the command: `/skyblock manage teams delete <name>`

:::warning
This action is irreversible. The island will remain, but cannot be re-bound to a new team. All users in the team will be
teleported to spawn after dropping all their items.
:::

## Clearing Teams
Since teams can be empty, you can "clear" all islands. To delete all empty teams, use:
`/skyblock manage teams clear <name>`

Refer to [Deleting Teams](#deleting-teams) for more information.

If a team name is provided, all players in that team will be removed and teleported to spawn island.

## Leaving a Team
Operators can remove players from a team using the command: `/skyblock manage kickPlayer <player>`.
Removed players will be teleported back to spawn after dropping all items in their inventory.

Non-operators who wish to leave their team can use: `/skyblock leave`. This will drop all items and teleport the player
to spawn.
