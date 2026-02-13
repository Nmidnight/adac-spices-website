import { Arrow, ArrowBox, Button, Container, ContainerText, Description, TextContainer, Title } from "./Hero.styled";
import arrowDown from "../../assets/main/arrowDown.svg"

export function Hero() {
    return (
        <Container>
            <TextContainer>
                <Title>ДОБАВЬ <span> ВОЛШЕБСТВА </span> В СВОЕ БЛЮДО.</Title>
                <Description>Сделай вкус насыщенным с авторскими смесями
                    и редкими специями от АДАЦ</Description>
            </TextContainer>
            <Button type="button">
                Заказать
            </Button>
            <ContainerText> Выгодные условия для бизнеса и опта</ContainerText>
            <ArrowBox>
                <Arrow src={arrowDown} alt="arrow down" />
            </ArrowBox>
        </Container>
    );
}