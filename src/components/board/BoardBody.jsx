import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../apis/firebaseService";

function BoardBody(props) {
  const navigate = useNavigate();
  const data = props.item.data();
  const docRef = props.docRef;
  const year = data.createdAt.toDate().getFullYear().toString();
  const month = data.createdAt.toDate().getMonth() + 1;
  const day = data.createdAt.toDate().getDate().toString();

  const updateData = async () => {
    const q = doc(firestore, "board", docRef);
    const querySnapshot = await updateDoc(q, {
      view: data.view + 1,
    });
  };
  return (
    <Tbody
      onClick={() => {
        navigate(`/board/${docRef}`);
        updateData();
      }}
    >
      <Tr>
        <Td>{data.docNumber}</Td>
        <Td>{data.title}</Td>
        <Td>{data.userName}</Td>
        <Td>{year.slice(2) + "." + month + "." + day}</Td>
        <Td>{data.view}</Td>
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
