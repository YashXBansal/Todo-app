import { useState } from "react";
import axios from 'axios'

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={async () => {
            try {
                await axios.post('http://localhost:3000/todo', {
                  title: title,
                  description: description,
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });              
                alert('Todo added');
              } catch (error) {
                console.error('Error adding todo:', error);
              }
        //   fetch("http://localhost:3000/todo", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       title: title,
        //       description: description,
        //     }),
        //     headers: {
        //       "Content-type": "application/json",
        //     },
        //   }).then(async function (res) {
        //     const json = await res.json();
        //     alert("Todo added");
        //   });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
