import React from "react";
import styled from "styled-components";

export default function KeypadScreen({ screenText }) {
  return (
    <ScreenWrapper>
      <KeypadText>{screenText}</KeypadText>
    </ScreenWrapper>
  );
}

const ScreenWrapper = styled.div`
  border: 1px solid;
  border-radius: 5px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  flex-wrap: wrap;
  max-width: 300px;
  background-color: white;
  padding: 0rem 1rem;
`;

const KeypadText = styled.div`
  font-size: 40px;
`;
