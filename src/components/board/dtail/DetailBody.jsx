import React, { useEffect } from "react";
import styled from "styled-components";
import { Viewer } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor.css";

function DetailBody(props) {
  const contents = props.Data.content;

  return (
    <DetailBodyContainer>
      {contents && <Viewer initialValue={contents} />}
    </DetailBodyContainer>
  );
}
const DetailBodyContainer = styled.div`
  width: 80%;
  margin: 25px auto;
  font-size: 3rem;
`;
export default DetailBody;
