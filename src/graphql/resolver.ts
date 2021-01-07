import people from "../../dist/db/db.js";
import { getById } from "../db/db.js";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
        //! 전송 받은 데이터 사용 객체 형태로 전송됨!
    },
};

export default resolvers;
