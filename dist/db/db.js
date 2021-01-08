"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovies = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const API_URL = "https://yts.mx/api/v2/list_movies.json";
const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `?limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return node_fetch_1.default(`${REQUEST_URL}`)
        .then((res) => res.json())
        .then((json) => json.data.movies);
};
exports.getMovies = getMovies;
//# sourceMappingURL=db.js.map