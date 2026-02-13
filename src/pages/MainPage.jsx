import styled from "styled-components";
import { Hero } from "../sections/Hero/Hero";
import { Advantages } from "../sections/Advantages/Advantages";

const Wrapper = styled.div`
    min-height: 60vh;
    background-color: #f6f5f3;
`

export function MainPage() {
    return (
        <Wrapper>
            <Hero />
            <Advantages />
        </Wrapper>
    );
}
