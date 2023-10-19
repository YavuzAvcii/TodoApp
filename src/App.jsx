import { useState } from "react";
import { CssBaseline } from "@mui/material";
import "./App.css";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CssBaseline />
      <TodoList />
    </>
  );
}

export default App;
