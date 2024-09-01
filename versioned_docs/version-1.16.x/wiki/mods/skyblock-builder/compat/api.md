---
title: Add your own
description: Adding mod compat into your own mod
---

# Adding compat as mod dev
## Disable team management
You can use the API to disable team management without needing to change the configuration. Additionally, you can
prevent players from being teleported to spawn when joining the world. For more information, visit
the [SkyblockBuilder API documentation 🔗](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/util/CompatHelper.java).
This can be called in the main constructor of your mod.

## Custom Forge Events
Skyblock Builder triggers several events which you can subscribe to, similar to normal Forge events. Here are all the
events:

- [Create Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockCreateTeamEvent.java)
- [Invite Player](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L53)
- [Accept Invitation](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L74)
- [Decline Invitation](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockInvitationEvent.java#L84)
- [Send Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L51)
- [Accept Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L61)
- [Deny Join Request](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockJoinRequestEvent.java#L81)
- [Toggle Visitation Status](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L50)
- [Toggle Join Request Status](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L87)
- [Add Spawn](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L114)
- [Remove Spawn](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L153)
- [Reset Spawns](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L183)
- [Rename Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L193)
- [Leave Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockManageTeamEvent.java#L222)
- [Create Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L84)
- [Clear Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L64)
- [Delete Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L44)
- [Add to Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L122)
- [Remove from Team](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockOpManageEvent.java#L153)
- [Teleport Home](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockTeleportHomeEvent.java)
- [Visit Island](https://github.com/ChaoticTrials/SkyblockBuilder/blob/1.16.x/src/main/java/de/melanx/skyblockbuilder/events/SkyblockVisitEvent.java)

All events have proper Javadoc documentation explaining their functionality.