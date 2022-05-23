import React from "react";
import styled from "styled-components";

export default function KeypadButtons({ id, handleClick, value }) {
  return (
    <Button key={id} onClick={handleClick}>
      {value}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  font-size: 50px;
  background-color: white;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.828);
    cursor: pointer;
  }
`;
