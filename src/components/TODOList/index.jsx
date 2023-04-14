import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  InputContainer,
  Input,
  Button,
  ListContainer,
  ListItem,
  UpdateDeleteButton,
} from "./styles";
import { getTodos } from "apis/todo";
import { addTodo } from "apis/todo";

const TODOList = () => {
  const [token, setToken] = useState();
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getTodos().then((data) => {
      setList(data);
    });
  }, []);

  const addToDo = useCallback(() => {
    const newTodo = {
      id: list.length + 1,
      todo: todo,
      isCompleted: false,
      userId: token,
    };
    addTodo(newTodo);
    setTodo("");
    setList([...list, newTodo]);
  }, [todo, token, list]);

  const onchangeTODO = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter task..."
          data-testid="new-todo-input"
          value={todo}
          onChange={onchangeTODO}
        />
        <Button data-testid="new-todo-add-button" onClick={addToDo}>
          추가
        </Button>
      </InputContainer>
      <ListContainer>
        {list?.map((e, i) => (
          <ListItem key={e}>
            <label>
              <input type="checkbox" value={list[i].isCompleted} />
              <span>{list[i].todo}</span>
              <UpdateDeleteButton data-testid="modify-button">
                수정
              </UpdateDeleteButton>
              <UpdateDeleteButton data-testid="delete-button">
                삭제
              </UpdateDeleteButton>
            </label>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default TODOList;
