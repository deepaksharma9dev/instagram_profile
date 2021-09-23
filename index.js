const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = express();


app.use(cors());
app.use(express.json());


const AuthRoutes = require('./routes/Authentication');
app.use('/api/auth', AuthRoutes);

// routes



// start server on the PORT.

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));