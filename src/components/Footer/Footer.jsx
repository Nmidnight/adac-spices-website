import { Contacts, ContactsItem, Container, FooterLink, LinksContainer, LinksNav, LinksNavBar, LinksTitle, LogoContainer, Wrapper } from "./Footer.styled";
import logo from "../../assets/logo.svg"
import location from "../../assets/contactsIcon/location.svg"
import phone from "../../assets/contactsIcon/phone.svg"
import mail from "../../assets/contactsIcon/mail.svg"

export function Footer() {
    return (
        <Wrapper>
            <Container>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                    <p>Большой выбор аджики, специй и припав на любой вкус у нас в магазине</p>
                </LogoContainer>
                <LinksContainer>
                    <LinksNav>
                        <LinksNavBar>
                            <LinksTitle>меню</LinksTitle>
                            <FooterLink to="/">Главная</FooterLink>
                            <FooterLink to="/catalogue">Каталог</FooterLink>
                            <FooterLink to="/contacts">Контакты</FooterLink>
                            <FooterLink to="/about-us">О нас</FooterLink>
                            <FooterLink to="/cart">Корзина</FooterLink>
                            <FooterLink to="/user">Кабинет</FooterLink>
                        </LinksNavBar>
                        <LinksNavBar>
                            <LinksTitle>Помощь</LinksTitle>
                            <FooterLink>Доставка</FooterLink>
                            <FooterLink>Оплата</FooterLink>
                            <FooterLink>Возврат</FooterLink>
                        </LinksNavBar>
                    </LinksNav>

                </LinksContainer>
                <div>
                    <LinksTitle>контакты</LinksTitle>
                    <Contacts>
                        <ContactsItem>
                            <img src={location} alt="location" />
                            <a
                                href="https://yandex.ru/maps/-/CPQ-MYkL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                г. Донецк, переулок Вятский 2а.
                            </a>
                        </ContactsItem>
                        <ContactsItem>
                            <img src={phone} alt="phone" />
                            <a href="tel:+79493302709">
                                +7 949 330 27 09
                            </a>
                        </ContactsItem>
                        <ContactsItem>
                            <img src={mail} alt="mail" />
                            <a href="mailto:linkos-don@yandex.ru">
                                linkos-don@yandex.ru
                            </a>
                        </ContactsItem>
                    </Contacts>
                </div>

            </Container>
            <p>Copyright © 2025 ТМ АДАЦ</p>
        </Wrapper>
    );
}