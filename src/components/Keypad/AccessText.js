import React from "react";
import styled from "styled-components";

export default function AccessText({ isAccessGranted }) {
  return <Text>{isAccessGranted}</Text>;
}

const Text = styled.h2`
  margin: 4rem 0rem 1rem 0rem;
  text-align: center;
  color: white;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
`;
