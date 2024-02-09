const mongoose = require("mongoose");
var dotenv = require('dotenv')
dotenv.config()

mongoose.connect(
    process.env.URL
)

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', TodoSchema);

module.exports = {
    todo
}