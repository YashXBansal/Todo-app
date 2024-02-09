const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://YashBansal:YashBansal@todo.hedhzlw.mongodb.net/todos"
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