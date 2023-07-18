import React, { useEffect } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
function DetailBody(props) {
  const data = props.Data.content;
  const innerHTML = `${data}`;
  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class) {
        domNode.attribs.className = domNode.attribs.class;
        delete domNode.attribs.class;
      }
      return domNode;
    },
  };
  const content = parse(innerHTML, options);
  return <DetailBodyContainer>{content}</DetailBodyContainer>;
}
const DetailBodyContainer = styled.div`
  width: 80%;
  height: 70vh;
  margin: 25px auto;
`;
export default DetailBody;
