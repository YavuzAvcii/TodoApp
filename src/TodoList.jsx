import { useEffect, useState } from "react";
import { List, Typography, Box } from "@mui/material";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) {
    return [];
  }
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => [
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    }),
  ];

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        }
        return { ...t };
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component="h2">
        Todos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              remove={removeTodo}
              toggle={toggleTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
