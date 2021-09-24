const express = require("express");
const cors = require("cors");
require("dotenv").config();



const app = express();
const db = require('./db/db');
db.connect_db();
app.use(cors());
app.use(express.json());



const AuthRoutes = require('./routes/Authentication');
const MediaRoutes = require('./routes/Photos');

app.use('/api/authRoutes', AuthRoutes);
app.use('/api/mediaRoutes', MediaRoutes);

// routes




// start server on the PORT.
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));