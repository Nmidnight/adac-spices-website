import styled from "styled-components";
import { lightText } from "../../styles/color";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
 width: 100%;
 padding: 60px 20px 32px 20px;
 background-color: #000;
 color: ${lightText};

 & p {
    text-align: center;
    margin-top: 30px;
    font-family: "Roboto";
    font-size: 10px;
 }
`

export const Container = styled.div`
 max-width: 1248px;
 margin: 0 auto;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: top;
 gap: 25px;
 `

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 335px;

  & img{
    width: 94px;
  }
  & p {
    color: ${lightText};
    font-weight: 400;
    font-size: 16px;
  }
 `

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
 `

export const LinksNav = styled.div`
 max-width: 454px;
 width: 100%;
 gap: 125px;
 display: flex;
 justify-content: space-between;
`
export const LinksNavBar = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const LinksTitle = styled.h3`
  font-family: Roboto;
  text-transform: uppercase;
  font-size: 24;
  font-weight: 600;
`

export const FooterLink = styled(NavLink)`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 6px;
}
`

export const Contacts = styled.div`
 display: flex;
 flex-direction: column;
 gap: 32px;
 margin-top: 22px;
`
export const ContactsItem = styled.div`
 display: flex;
 gap: 14px;

 &img {
    width: 14px;
    height: 14px;
 }

 & a {
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
 }
`