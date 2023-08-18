import React from "react";
import styled from "styled-components";
import { Viewer } from "@toast-ui/react-editor";
import { useDateChange } from "../../../hooks/useDateChange";
import { getAuth } from "firebase/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { firebaseDeleteBoard } from "../../../apis/board/board";
function DetailHeader({ data }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const ref = useParams();
  const userId = getAuth().currentUser.uid;
  const docCreator = data.uid;
  const contents = data.content;
  const date = useDateChange(data.createdAt, 3);

  const deleteMutation = useMutation((data) => firebaseDeleteBoard(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("firebaseGetBoards");
      navigate("/board");
    },
  });
  return (
    <>
      <DetailHeaderContainer>
        <DetailHeaderUser>{data.userName}</DetailHeaderUser>
        <DetailHeaderTitle>{data.title}</DetailHeaderTitle>
        <DetailHeaderTimeViewBox>
          <DetailHeaderTime>{`작성일 : ${date} `}</DetailHeaderTime>
          <DetailHeaderView>{"조회  : " + data.view}</DetailHeaderView>
        </DetailHeaderTimeViewBox>
      </DetailHeaderContainer>
      <DetailBodyContainer>
        {contents && <Viewer initialValue={contents} />}
      </DetailBodyContainer>
      {userId == docCreator ? (
        <DeleteUpdateBtnBox>
          <UpdateBtn onClick={() => navigate(`/board/update/${ref.id}`)}>
            수정
          </UpdateBtn>
          <DeleteBtn
            onClick={() => {
              deleteMutation.mutate(ref);
            }}
          >
            삭제
          </DeleteBtn>
        </DeleteUpdateBtnBox>
      ) : null}
    </>
  );
}
const DetailHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #c6c8ca;
`;
const DetailHeaderUser = styled.div`
  width: 20%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const DetailHeaderTitle = styled.div`
  width: 60%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const DetailHeaderTimeViewBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;
const DetailHeaderTime = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;
const DetailHeaderView = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const DetailBodyContainer = styled.div`
  width: 80%;
  margin: 25px auto;
  min-height: 20vh;
`;
const DeleteUpdateBtnBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
const UpdateBtn = styled.button`
  border: none;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
  width: 40px;
  height: 20px;
  &:hover {
    border-bottom: 1px solid #609aea;
    transition: 0.3s;
    color: #609aea;
  }
`;
const DeleteBtn = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  width: 40px;
  height: 20px;
  &:hover {
    border-bottom: 1px solid #609aea;
    transition: 0.3s;
    color: #609aea;
  }
`;
export default DetailHeader;
