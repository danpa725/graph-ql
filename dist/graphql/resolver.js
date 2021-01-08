"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = require("../db/db.js");
const resolvers = {
    Query: {
        movies: () => db_js_1.getMovies(),
        movie: (_, { id }) => db_js_1.getById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => db_js_1.addMovie(name, score),
        deleteMovie: (_, { id }) => db_js_1.deleteMovie(id),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolver.js.map