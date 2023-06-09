import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
function TodoHead({ count }) {
  const dayArr = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
  
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth()+1;
  let date = today.getDate();
  let day = today.getDay();
  let today_str = `${year}.${String(month).padStart(2,'0')}.${date}`;
  
  return (
    <TodoHeadBlock>
      <h1>{today_str}</h1>
      <div className="day">{dayArr[Number(day)]}</div>
      <div className="tasks-left">{count}</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
