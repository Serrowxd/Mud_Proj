const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  info: String!
}

type Inventory {

}
`

// How are we going to create an inventory?
// An inventory is an array of items, each item in that inventory has a count attached.
// Each item is set in the database.

// Possibly look at it like this?
const axe = {
  id: 1,
  name: "Axe",
  description: "A simple axe",
}

const pickaxe = {
  id: 2,
  name: "Pickaxe",
  description: "A heavy pickaxe",
}

const log = {
  id: 3,
  name: "Log",
  description: "A T1 Log"
}

const inv = [
  {
    item: axe,
    count: 1
  },
  {
    item: pickaxe,
    count: 1,
  },
  {
    item: log,
    count: 23
  }
]

// Tl;dr
// Array of objects inside the inventory where the items themselves are predefined.
// Array has a set length, aka max inventory size.
// Each space in the inventory corresponds to an item.
// The corresponding item tells you what it is, which allows them to be placed in any order.
// Example:
// We want to access position 2's item and item count
// inv[2].item.name
// inv[2].count
// This would return "Log" and "23"
// We could then grab the id via inv[2].item.id
// Then we can use that data to process different actions via switch or some other logic handle
// Switch(inv[2].item.id) { case: 3 handle argument break; default: handle error }

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))