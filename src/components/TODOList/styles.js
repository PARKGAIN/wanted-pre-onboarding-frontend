import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  margin-left: 10px;
`;

export const ListContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 80%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

export const TaskText = styled.span`
  font-size: 18px;
`;

export const UpdateDeleteButton = styled.button`
  cursor: pointer;
  margin: 0 2px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
`;
