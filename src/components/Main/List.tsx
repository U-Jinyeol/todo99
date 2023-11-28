import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowRightSquare } from "react-icons/bs";
import { useStore } from "../../hooks/store/store";
import { useNavigate } from "react-router-dom";

const MainList = () => {
  const { bears, increasePopulation, removeAllBears } = useStore();

  const increase = () => {
    increasePopulation();
  };

  const reset = () => {
    removeAllBears();
  };

  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate("/detail/2");
  };

  const moveToAdd = () => {
    navigate("/add");
  };

  return (
    <Wrapper>
      {bears}
      <button onClick={increase}> INCREASE</button>
      <button onClick={reset}> RESET</button>

      <AddButtonWrap>
        <button onClick={moveToAdd}>+</button>
        <p>Add New Task</p>
      </AddButtonWrap>
      <ListWrap>
        <p>total : 52</p>

        <ListItemWrap>
          <ListItem>
            <ListItemTitleWrap>
              <RiDeleteBinLine />
              <input type="checkbox" id="isChecked" name="isChecked" />
              <label htmlFor="isChecked">TITLE TITLE TITLE</label>
            </ListItemTitleWrap>
            <ListItemDateWrap>
              <p>2023.10.26 09:02:13</p>
              <button onClick={moveToDetail}>
                <BsArrowRightSquare />
              </button>
            </ListItemDateWrap>
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
