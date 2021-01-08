import { getById, getMovies, addMovie, deleteMovie } from "../db/db.js";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
        //! 전송 받은 데이터 사용 객체 형태로 전송됨!
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    },
};

export default resolvers;
