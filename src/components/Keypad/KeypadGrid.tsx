import styled from "styled-components";

type Props = {
  keypadElements: JSX.Element[];
};

export default function KeypadGrid({ keypadElements }: Props) {
  return <GridWrapper>{keypadElements}</GridWrapper>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
