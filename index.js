import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
    res.send("GraphQL is amazing!!!");
});

const root = {
    friend: () => {
        return {
            "id": 12345,
            "firstName": "Nadi",
            "lastName": "V",
            "gender": "female",
            "language": "English",
            "email": "me@me.com"
        }
    }
};
app.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => {
    console.log("Server listening...");
});