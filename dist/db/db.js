"use strict";
//! 어떠한 종류의 db를 사용하던 상관 없음
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMovie = exports.deleteMovie = exports.getById = exports.getMovies = void 0;
let movies = [
    {
        id: 1,
        name: "legend",
        score: 8.5,
    },
    {
        id: 2,
        name: "legend2",
        score: 5.5,
    },
    {
        id: 3,
        name: "legend3",
        score: 9.5,
    },
    {
        id: 4,
        name: "legend4",
        score: 7.1,
    },
    {
        id: 5,
        name: "legend5",
        score: 8.4,
    },
    {
        id: 6,
        name: "legend6",
        score: 8.5,
    },
];
const getMovies = () => movies;
exports.getMovies = getMovies;
const getById = (id) => {
    const filteredPeople = movies.filter((idx) => id === idx.id);
    return filteredPeople[0];
};
exports.getById = getById;
const deleteMovie = (id) => {
    const cleanedMovies = movies.filter((movie) => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
        //! deleted TRUE
    }
    else {
        return false;
        //! deleted FALSE
    }
};
exports.deleteMovie = deleteMovie;
const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;
};
exports.addMovie = addMovie;
//# sourceMappingURL=db.js.map