import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: sky blue;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  
`;

const CheckboxLabel = styled.label`
    margin-left: 5px;
  font-size: 1rem;
    color: green;
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 1rem;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
`;

const ListItem = styled(motion.li)`
  background-color: #fff;
  color: #333;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #c0392b;
  }
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/todos")
      .then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (!newTodo.trim()) return;

    axios
      .post("http://localhost:8080/api/todos", {
        title: newTodo,
        completed,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
        setNewTodo("");
        setCompleted(false);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8080/api/todos/${id}`)
      .then(() =>
        setTodos(todos.filter((todo) => todo.id !== id))
      );
  };

  return (
    <Container>
      <Title>Todo List</Title>

      <Form>
        <Input
          type="text"
          placeholder="Add a new Task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <CheckboxContainer>
          <CheckboxLabel>Completed?</CheckboxLabel>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </CheckboxContainer>

        <Button onClick={addTodo}>Add Todo</Button>
      </Form>

      <List>
        <AnimatePresence>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {todo.title} —{" "}
              {todo.completed ? "Completed" : "Not Completed"}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Delete
              </DeleteButton>
            </ListItem>
          ))}
        </AnimatePresence>
      </List>
    </Container>
  );
}

export default TodoList;
