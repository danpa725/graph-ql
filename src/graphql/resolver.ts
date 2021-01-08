import { getMovies } from "../db/db.js";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        //! 전송 받은 데이터 사용 객체 형태로 전송됨!
    },
};

export default resolvers;
