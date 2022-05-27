import styled from 'styled-components';

const TodoHead = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const week = date.getDay();
    const weeks = ['일','월','화','수','목','금','토'];
    

    return (
        <TodoHeadBlock>
            <h1>{year}년 {month}월 {day}일</h1>
            <div className="day">{weeks[week]}요일</div>
            <div className="tasks-left">완료 2개 할일 2개</div>
        </TodoHeadBlock>
    )
}

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

export default TodoHead;