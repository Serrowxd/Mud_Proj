# Mud_Proj

A MUD with ReactJS and GraphQL

MudUI will be added later, right now the focus is getting the simple logic down on the backend.

For now all the content will be ran in a simple manner, we'll make it pretty later.

## To-Do

- User Login / Auth
- User Bag (items)
- User Skills
- User Stats
- User Page (Stats/Items)

- Implement Actions
  - Mining
    - Smelting
  - Fishing
    - Cooking

---

Something I think I'm going to run into a lot is having a constant subscription to both the users actions, as well as their inventory state.

I think for the time being I just want to get the users inventory to populate an item when I send it one. The actions can come later, I just want it to register that a new item has been added, then update the inventory accordingly.

---

Main issue currently is getting a database of items. Prisma doesn't allow the same item / ID to be used multiple times without a connection, and as of current the connection doesn't work.

For right now we're going to use a "Single-user" dungeon, rather than the "Multi-user" at least until I can get the connection running in a way that I'm happy with.

--

Thinking on this for a bit, I think working with just the grpahql schema and not having persisted data is probably the move, at least until I can get the whole process of logging into your account and seeing the UI is complete.

Once all the information is in place, then we can start storing it and continue putting the workload on the server. That would make things infinitely easier, all things considered.
