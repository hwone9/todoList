import styled from "styled-components";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <TodoHead></TodoHead>
      <TodoList></TodoList>
      <TodoCreate params=""></TodoCreate>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
