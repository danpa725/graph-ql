"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const resolver_js_1 = __importDefault(require("../dist/graphql/resolver.js"));
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers: resolver_js_1.default,
});
server.start(() => {
    console.log("Im running!");
});
//# sourceMappingURL=index.js.map