import crypto from "crypto";

class Friend {
    constructor(id, { firstName, lastName, gender, language, age, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.age = age;
        this.email = email;
    }
}

const friendDatabase = {};

// resolver map
export const resolvers = {
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id]);
        }
    },
    Mutation: {
        createFriend: ({ input }) => {
            let id = crypto.randomBytes(10).toString("hex");
            friendDatabase[id] = input;
            return new Friend(id, input);
        }
    }
};
