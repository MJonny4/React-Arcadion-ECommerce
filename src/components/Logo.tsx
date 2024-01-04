import styled from "styled-components";

const Logo = () => {
    return <Wrapper>
        Arcad<span>ion</span>
    </Wrapper>
};

const Wrapper = styled.h3`
    margin-bottom: 0;
    color: var(--clr-primary-5);
    span {
        color: var(--clr-primary-8);
    }
`;

export default Logo;

