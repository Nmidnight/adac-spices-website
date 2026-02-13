import styled from "styled-components";
import { Hero } from "../components/Hero/Hero";

const Wrapper = styled.div`
    min-height: 60vh;
`

export function MainPage() {
    return (
        <Wrapper>
            <Hero />
        </Wrapper>
    );
}