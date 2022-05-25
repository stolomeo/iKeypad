import styled from "styled-components";

type Props = {
  keypadElements: JSX.Element[];
  id: string;
};

export default function KeypadGrid({ keypadElements, id }: Props) {
  return <GridWrapper key={id}>{keypadElements}</GridWrapper>;
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
