import { resolvers } from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
    type Friend {
        id: ID,
        firstName: String
        lastName: String
        gender: Gender
        language: String,
        age: Int
        email: String
    }

    enum Gender{
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID,
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        age: Int
        email: String
    }

    type Mutation {
        createFriend (input: FriendInput): Friend
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers})

export { schema};