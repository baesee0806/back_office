import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseUpdateView } from "../../apis/board/board";
import { useQueryClient, useMutation } from "@tanstack/react-query";

function BoardBody({ item, view }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const docRef = item.docId;
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
      <Tr>
        <Td>{item.docNumber}</Td>
        <Td>{item.title}</Td>
        <Td>{item.userName}</Td>
        <Td>{year.slice(2) + "." + month + "." + day}</Td>
        <Td>{item.view}</Td>
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
const Td = styled.td`
  border-bottom: 1px solid #000;
`;
export default React.memo(BoardBody);
