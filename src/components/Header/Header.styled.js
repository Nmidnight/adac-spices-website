import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { lightText, yellow } from '../../styles/color';
export const Wrapper = styled.header`
  width: 100%;
  background-color: #000;
`

export const Container = styled.div`
 max-width: 1248px;
 width: 100%;
 height: 80px;
 padding: 0 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;

 & img {
    width: 94px;
    cursor: pointer;
 }
`
export const NavWrapper = styled.div`
 display: flex;
 gap: 50px;

`


export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const StyledNavLink = styled(NavLink)`  font-weight: 400;
font-size: 16px;
text-transform: uppercase;
text-decoration: none;
color: ${lightText};

&.active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
}
`

export const Icons = styled.div`
 display: flex;
 gap: 15px;
 align-items: center;
`

export const IconsContainer = styled.div`
  position: relative;

  & img {
        width: 30px;
    }

`

export const IconsSpan = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${yellow};
  color: #000;
  z-index: 3;
  text-align: center;
  font-size: 10px;
  font-weight: 600;
`