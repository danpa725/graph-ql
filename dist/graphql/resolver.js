"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = require("../db/db.js");
const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => db_js_1.getMovies(limit, rating),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolver.js.map