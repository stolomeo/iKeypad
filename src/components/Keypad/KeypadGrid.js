import React from "react";
import styled from "styled-components";

export default function KeypadGrid({ keypadElements }) {
  return <GridWrapper key={keypadElements.id}>{keypadElements}</GridWrapper>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
