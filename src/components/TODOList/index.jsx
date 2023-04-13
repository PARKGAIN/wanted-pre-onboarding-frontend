import React from "react";
import {
  Container,
  Title,
  InputContainer,
  Input,
  Button,
  ListContainer,
  ListItem,
  TaskText,
  DeleteButton,
} from "./styles";

function index() {
  return (
    <Container>
      <Title>To Do List</Title>
      <InputContainer>
        <Input type="text" placeholder="Enter task..." />
        <Button onClick={""}>Add</Button>
      </InputContainer>
      <ListContainer>
        {""?.map((task, index) => (
          <ListItem key={index}>
            <TaskText>{task}</TaskText>
            <DeleteButton onClick={() => ""}>Delete</DeleteButton>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}

export default index;
