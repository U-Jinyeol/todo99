import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";
import { useFetchDetailTodo } from "../../hooks/querys/todo";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

const DetailContent = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchDetailTodo(Number(id));

  if (isLoading) {
    return (
      <Fragment>
        <h1>LOADING ...</h1>
      </Fragment>
    );
  }

  return (
    <div className="container">
      <ListTop>
        <input type="checkbox" id="isChecked" name="isChecked" />
        <BiEdit />
        <p>2023.10.26 09:02:13</p>
        <RiDeleteBinLine />
      </ListTop>

      <ListLabel>{}</ListLabel>
      <ListTag>{data?.list[0]?.tag}</ListTag>

      <ListLabel>Title</ListLabel>
      <ListTitle>
        타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이
      </ListTitle>

      <ListLabel>Content</ListLabel>
      <ListContent>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </ListContent>
    </div>
  );
};

export default DetailContent;

const ListTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

const ListLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0 10px;
  margin-top: 30px;
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ListContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  height: 300px;
  align-items: baseline;
`;

const ListTag = styled.div`
  padding: 8px;
  background-color: #edd9ff;
  display: inline-block;
  min-width: 154px;
  border-radius: 4px;
  text-align: center;
`;
