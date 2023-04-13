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
  UpdateDeleteButton,
} from "./styles";

function TODOList() {
  return (
    <Container>
      <Title>To Do List</Title>
      <InputContainer>
        <Input type="text" placeholder="Enter task..." />
        <Button onClick={""}>Add</Button>
      </InputContainer>
      <ListContainer>
        {[1, 2, 3].map((task, index) => (
          <ListItem key={index}>
            <TaskText>{task}</TaskText>
            <div>
              <UpdateDeleteButton onClick={() => ""}>Update</UpdateDeleteButton>
              <UpdateDeleteButton onClick={() => ""}>Delete</UpdateDeleteButton>
            </div>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}

export default TODOList;
