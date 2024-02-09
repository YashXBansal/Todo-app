const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // put it in the DB

})

app.get("/todos", (req, res) => {

})

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(401).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})