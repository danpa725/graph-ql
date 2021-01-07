"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_js_1 = __importDefault(require("../../dist/db/db.js"));
const db_js_2 = require("../db/db.js");
const resolvers = {
    Query: {
        people: () => db_js_1.default,
        person: (_, { id }) => db_js_2.getById(id),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolver.js.map