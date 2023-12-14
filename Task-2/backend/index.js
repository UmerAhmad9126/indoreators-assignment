const express = require('express');
const cors = require('cors');
const { connection } = require('./config/db');
const { noteRouter } = require('./router/noteRouter');




const app = express();
app.use(cors());
app.use(express.json());
app.use("/notes", noteRouter)



app.listen(8080, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log('error:', error);
    }
    console.log("Server listening");
});

