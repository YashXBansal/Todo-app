const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(401).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  // put it in the DB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created sucessfully!",
  });
});

app.get("/todos", async (req, res) => {
  const Todo = await todo.find({});
  res.json({
    Todo,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(401).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "Todo marked as completed!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
