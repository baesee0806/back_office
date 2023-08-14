import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseUpdateView } from "../../apis/board/board";
import { useQueryClient, useMutation } from "@tanstack/react-query";

function BoardBody({ item }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const docRef = item.id;
  const year = item.createdAt.toDate().getFullYear().toString();
  const month = item.createdAt.toDate().getMonth() + 1;
  const day = item.createdAt.toDate().getDate().toString();

  const updateViewMutation = useMutation((item) => firebaseUpdateView(item), {
    onSuccess: () => {
      queryClient.invalidateQueries("firebaseGetBoards");
    },
  });
  return (
    <Tbody
      onClick={() => {
        updateViewMutation.mutate(item);
        navigate(`/board/${docRef}`);
      }}
    >
      <Tr maxLength={15}>
        <Num>{item.docNumber}</Num>
        <Title>{item.title}</Title>
        <UserName>{item.userName}</UserName>
        <Date>{year.slice(2) + "." + month + "." + day}</Date>
        <View>{item.view}</View>
      </Tr>
    </Tbody>
  );
}
const Tbody = styled.tbody`
  width: 100%;
  height: 35px;
  cursor: pointer;
`;
const Tr = styled.tr`
  width: 100%;
  text-align: center;
`;

const Num = styled.td`
  border-bottom: 1px solid #000;
  width: 5%;
`;
const Title = styled.td`
  border-bottom: 1px solid #000;
  width: 65%;
`;
const UserName = styled.td`
  border-bottom: 1px solid #000;
  width: 10%;
`;
const Date = styled.td`
  border-bottom: 1px solid #000;
  width: 10%;
`;
const View = styled.td`
  border-bottom: 1px solid #000;
  width: 10%;
`;
export default React.memo(BoardBody);
