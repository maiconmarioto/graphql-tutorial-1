const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb://maicon:test123@ds219672.mlab.com:19672/gql-ninja-m",
  {
    useNewUrlParser: true
  }
);
mongoose.connection.once("open", () => {
  console.log("connected to mlab");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening");
});
