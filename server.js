import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGql.js";
import mongoose from "mongoose";
import connectionDb from "./db.connection.js";

const { username, password } = process.env;

const uri = `mongodb+srv://${process.env.User_Name}:${process.env.Pass_Word}@cluster0.1m3fl9p.mongodb.net/restaurent?retryWrites=true&w=majority`;

console.log("find", process.env.User_Name);

mongoose.connect(uri);

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("Server Ready at =>", url);
});
