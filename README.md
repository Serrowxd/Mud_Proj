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
