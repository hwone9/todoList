import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList({ params }) {
  return (
    <TodoListBlock>
      <TodoItem id="1" done={true} text="test1"></TodoItem>
      <TodoItem id="2" done={false} text="test2"></TodoItem>
      <TodoItem id="3" done={true} text="test3"></TodoItem>
      <TodoItem id="4" done={false} text="test4"></TodoItem>
    </TodoListBlock>
  );
}

export default TodoList;
