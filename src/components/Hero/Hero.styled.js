import styled from "styled-components";
import hero from "../../assets/main/hero.png"
import { yellow } from "../../styles/color";


export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: gray;
  background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
    url(${hero});
  background-position: center center;
  background-size: fill;
  color: #fff;
  
  & p {
    align-self: center;
  }
`
export const TextContainer = styled.div`
  padding-top: 280px;
  width: 650px;
  margin-left: 188px;
  margin-bottom: 110px;
  display: flex;
  flex-direction: column;
  gap: 75px;
`

export const Title = styled.h1`
 font-size: 32px;
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
  }
`
export const ContainerText = styled.p`
 `