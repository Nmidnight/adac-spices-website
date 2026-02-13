import styled, { keyframes } from "styled-components";
import hero from "../../assets/main/hero.png"
import { yellow } from "../../styles/color";
import { Link } from "react-router-dom";

const floatY = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.9; }
  50%      { transform: translateY(10px); opacity: 1; }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-color: gray;
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url(${hero});
  background-position: center center;
  background-size: cover;
  color: #fff;

`
export const TextContainer = styled.div`
  padding-top: 280px;
  width: 800px;
  margin-left: 188px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Title = styled.h1`
 font-size: 40px; 
 line-height: 1.2;
 font-weight: 600;
 font-family: "Roboto";
 text-transform: uppercase;

 & span {
    color: ${yellow};
 }
`

export const Description = styled.p`
  width: 574px;
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 400;

`
export const Button = styled.button`
  width: 280px;
  height: 56px;
  border-radius: 32px;
  font-size: 24px;
  font-weight: 600;
  color: #000;
  background-color: ${yellow};
  text-transform: uppercase;
  align-self: center;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #D2AD0B;
    transform: translateY(-2px);
  }
`
export const ContainerText = styled.p`
    align-self: center;
    margin-top: 10px;
    font-size: 10px;
    margin-bottom: 75px;
 `

export const ArrowBox = styled(Link)`
 align-self: center;
 cursor: pointer;
 background: none;
 border: none
 `


export const Arrow = styled.img`
 width: 32px;
 opacity: 0.7;
 
 &:hover {
    animation: ${floatY} 1.6s ease-in-out infinite;
}
`