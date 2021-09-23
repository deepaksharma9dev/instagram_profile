const express = require("express");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const app = express();


app.use(cors());
app.use(express.json());


const AuthRoutes = require('./routes/Authentication');
const MediaRoutes = require('./routes/Photos');

app.use('/api/authRoutes', AuthRoutes);
app.use('/api/mediaRoutes', MediaRoutes);

// routes




// start server on the PORT.

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));