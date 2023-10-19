import { ListItem, InputAdornment, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function TodoForm({ addTodo }) {
  const [val, setVal] = useState("");

  const handleInputChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(val);
    setVal("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: 340 }}
          id="outlined-adornment-password"
          type="text"
          value={val}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="add new todo" edge="end">
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Add a todo"
          placeholder="add a todo"
        />
      </form>
    </ListItem>
  );
}
