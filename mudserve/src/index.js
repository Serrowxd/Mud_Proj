const { PrismaClient } = require("@prisma/client");
const { GraphQLServer } = require("graphql-yoga");
const { PubSub } = require("graphql-yoga");

const resolvers = {
  Inventory,
  Mutation,
  Query,
  User,
};

// const pubsub = new PubSub();

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: (requests) => {
    return {
      ...requests,
      prisma,
    };
  },
});

server.start(() => {
  console.log(`Server is running on http://localhost:4000`);
});
