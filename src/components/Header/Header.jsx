import { Container, Icons, IconsContainer, IconsSpan, Nav, NavWrapper, StyledNavLink, Wrapper } from "./Header.styled";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg"
import auth from "../../assets/auth.svg"

export function Header() {
    return (
        <Wrapper>
            <Container>
                <StyledNavLink to="/">
                    <img src={logo} alt="logo" />
                </StyledNavLink>
                <NavWrapper>
                    <Nav>
                        <StyledNavLink to="/" >Главная</StyledNavLink>
                        <StyledNavLink to="/catalogue">Каталог</StyledNavLink>
                        <StyledNavLink to="/about-us">О Нас</StyledNavLink>
                        <StyledNavLink to="/contacts">Контакты</StyledNavLink>
                    </Nav>
                    <Icons>
                        <IconsContainer>
                            <StyledNavLink to="/cart">
                                <img src={cart} alt="cart icon" />
                            </StyledNavLink>
                            <IconsSpan>
                                3
                            </IconsSpan>
                        </IconsContainer>
                        <IconsContainer>
                            <StyledNavLink to="/user">
                                <img src={auth} alt="user icon" />
                            </StyledNavLink>
                        </IconsContainer>
                    </Icons>
                </NavWrapper>
            </Container>
        </Wrapper>
    );
}