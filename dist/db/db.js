"use strict";
//! 어떠한 종류의 db를 사용하던 상관 없음
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = void 0;
const people = [
    {
        id: 1,
        age: 22,
        gender: "male",
        name: "june",
    },
    {
        id: 2,
        age: 21,
        gender: "female",
        name: "junae",
    },
    {
        id: 3,
        age: 22,
        gender: "female",
        name: "jfefune",
    },
    {
        id: 4,
        age: 22,
        gender: "male",
        name: "junfee",
    },
    {
        id: 5,
        age: 22,
        gender: "male",
        name: "aadjune",
    },
    {
        id: 6,
        age: 25,
        gender: "male",
        name: "juandsadae",
    },
];
exports.default = people;
const getById = (id) => {
    const filteredPeople = people.filter((idx) => id === idx.id);
    return filteredPeople[0];
};
exports.getById = getById;
//# sourceMappingURL=db.js.map