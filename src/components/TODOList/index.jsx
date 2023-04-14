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
import { deleteTodo } from "apis/todo";
import { updateTodo } from "apis/todo";

const TODOList = () => {
  const [token, setToken] = useState("");
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [update, setUpdate] = useState();
  const [updateValue, setUpdateValue] = useState(list.todo);

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
  const handleUpdateValue = (e) => {
    e.preventDefault();
    setUpdateValue(e.target.value);
  };

  const updateTODO = (id) => {
    const updateTODOValue = { todo: updateValue, isCompleted: false };
    updateTodo(id, updateTODOValue);
    setUpdateValue("");
    setUpdate();
  };

  const deleteTODO = (id) => {
    deleteTodo(id);
    const removeArr = [...list].filter((list) => list.id !== id);
    setList(removeArr);
  };

  const completeTodo = (id) => {
    const isCompleted = list.map((list) => {
      if (list.id === id) {
        list.isCompleted = !list.isCompleted;
        updateTodo(id, {
          todo: `${list.todo}`,
          isCompleted: list.isCompleted,
        });
      }
      return list;
    });
    setList(isCompleted);
  };

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="할일을 입력하세요..."
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
              <input
                type="checkbox"
                checked={list[i].isCompleted}
                onClick={() => completeTodo(list[i].id)}
              />
              {update == i ? (
                <input
                  defaultValue={list[i].todo}
                  value={updateValue}
                  onChange={handleUpdateValue}
                />
              ) : (
                <span>{list[i].todo}</span>
              )}
            </label>
            {update == i ? (
              <div>
                <UpdateDeleteButton
                  data-testid="modify-button"
                  onClick={() => {
                    setUpdate(i);
                    updateTODO(list[i].id);
                  }}
                >
                  제출
                </UpdateDeleteButton>
                <UpdateDeleteButton
                  data-testid="delete-button"
                  onClick={() => setUpdate()}
                >
                  취소
                </UpdateDeleteButton>
              </div>
            ) : (
              <div>
                <UpdateDeleteButton
                  data-testid="modify-button"
                  onClick={() => {
                    setUpdate(i);
                  }}
                >
                  수정
                </UpdateDeleteButton>
                <UpdateDeleteButton
                  data-testid="delete-button"
                  onClick={() => deleteTODO(list[i].id)}
                >
                  삭제
                </UpdateDeleteButton>
              </div>
            )}
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default TODOList;
