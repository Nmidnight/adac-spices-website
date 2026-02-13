import { CardContainer, Description, TextContainer, Title, Wrapper } from "./Advantages.styled";
import stars from "../../assets/advantures/stars.svg"
import label from "../../assets/advantures/label.svg"
import leaf from "../../assets/advantures/leaf.svg"
import starsgroup from "../../assets/advantures/starsgroup.svg"

export function Advantages() {
    return (
        <Wrapper>
            <CardContainer>
                <img src={stars} alt="stars" />
                <TextContainer>
                    <Title>авторские смеси</Title>
                    <Description>
                        Созданы по собственным рецептам.
                        Насыщенный вкус без лишних добавок.
                    </Description>
                </TextContainer>
            </CardContainer>
            <CardContainer>
                <img src={label} alt="label" />
                <TextContainer>
                    <Title>лучшие цены</Title>
                    <Description>
                        Премиальное качество по честной цене.
                        Без переплат и скрытых наценок.
                    </Description>
                </TextContainer>
            </CardContainer>
            <CardContainer>
                <img src={leaf} alt="leaf" />
                <TextContainer>
                    <Title>Экологичный  продукт</Title>
                    <Description>
                        Только натуральные ингредиенты.
                        Свежесть и чистый состав в каждой партии.
                    </Description>
                </TextContainer>
            </CardContainer>
            <CardContainer>
                <img src={starsgroup} alt="starsgroup" />
                <TextContainer>
                    <Title>Высокое качество</Title>
                    <Description>
                        Контроль на каждом этапе производства.
                        От отбора сырья до упаковки.
                    </Description>
                </TextContainer>
            </CardContainer>
        </Wrapper>
    );
}
