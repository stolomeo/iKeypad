import styled from "styled-components";

type Props = {
  accessText: string;
};

export default function KeypadAccessText({ accessText }: Props) {
  return <Text>{accessText}</Text>;
}

const Text = styled.h2`
  margin: 4rem 0rem 1rem 0rem;
  text-align: center;
  color: white;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
`;
