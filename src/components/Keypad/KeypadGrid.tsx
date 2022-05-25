import styled from "styled-components";

type Props = {
  keypadElements:
};

export default function KeypadGrid({ keypadElements }: Props) {
  return <GridWrapper key={keypadElements.id}>{keypadElements}</GridWrapper>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
