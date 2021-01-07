import { GraphQLServer } from "graphql-yoga";
import resolvers from "../dist/graphql/resolver.js";

const server = new GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers,
});

server.start(() => {
    console.log("Im running!");
});
