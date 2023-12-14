const mongoose = require("mongoose");


const connection = mongoose.connect(`mongodb+srv://ahmadumer9126:ahmad@cluster0.d9obcgw.mongodb.net/notedb?retryWrites=true&w=majority`);

module.exports = {
    connection
}
