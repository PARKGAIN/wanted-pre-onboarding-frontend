import React from "react";
import {
  Container,
  InputContainer,
  Input,
  Button,
  ListContainer,
  ListItem,
  UpdateDeleteButton,
} from "./styles";

function TODOList() {
  return (
    <Container>
      <InputContainer>
        <Input type="text" placeholder="Enter task..." />
        <Button>Add</Button>
      </InputContainer>
      <ListContainer>
        {[1, 2, 3].map((task) => (
          <ListItem key={task}>
            <label>
              <input type="checkbox" />
              <span>TODO 1</span>
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
}

export default TODOList;
