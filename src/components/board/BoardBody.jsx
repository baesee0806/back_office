import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseUpdateView } from "../../apis/board/board";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useDateChange } from "../../hooks/useDateChange";

function BoardBody({ item }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const docRef = item.id;
  const date = useDateChange(item.createdAt, 3);
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
        <Date>{date}</Date>
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
