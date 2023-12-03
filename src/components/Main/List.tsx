import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowRightSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useFetchTodos } from "../../hooks/querys/todo";
import { Fragment } from "react";

const MainList = () => {
  const { data, isLoading, isError, isSuccess } = useFetchTodos();
  const navigate = useNavigate();

  const moveToDetail = (todoId: number) => {
    navigate(`/detail/${todoId}`);
  };

  const moveToAdd = () => {
    navigate("/add");
  };

  if (isLoading) {
    return (
      <Fragment>
        <h1>LOADING ...</h1>
      </Fragment>
    );
  }

  return (
    <Wrapper>
      <AddButtonWrap>
        <button onClick={moveToAdd}>+</button>
        <p>Add New Task</p>
      </AddButtonWrap>
      <ListWrap>
        <p>total : {data.total} </p>

        <ListItemWrap>
          <ListItem>
            {data.list.map((todo: any) => {
              return (
                <Fragment key={todo._id}>
                  <ListItemTitleWrap>
                    <RiDeleteBinLine />
                    <input type="checkbox" id="isChecked" name="isChecked" />
                    <label htmlFor="isChecked">{todo.title}</label>
                  </ListItemTitleWrap>
                  <ListItemDateWrap>
                    <button onClick={() => moveToDetail(todo.todoId)}>
                      <BsArrowRightSquare />
                    </button>
                  </ListItemDateWrap>
                </Fragment>
              );
            })}
          </ListItem>
        </ListItemWrap>
      </ListWrap>
    </Wrapper>
  );
};

export default MainList;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const AddButtonWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #b47aea;
  border-radius: 12px;
  padding: 19px 50px;
`;

const ListItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 12px 0;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemDateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
