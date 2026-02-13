import styled from "styled-components";
import { dartText } from "../../styles/color";

export const Wrapper = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
  color: ${dartText};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const CardContainer = styled.div`
  padding: 40px 30px;
  border-radius: 16px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  }

  & img {
    width: 60px;
    height: 60px;
  }
`;

export const TextContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`

export const Title = styled.h2`
 font-size: 16px;
 line-height: 1.2;
 font-weight: 400;
 text-transform: uppercase;
 font-family: "Roboto";
 margin-bottom: 15px;
`

export const Description = styled.p`
 font-size: 16px;
 font-weight: 400;

`