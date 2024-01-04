import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
    const starIcons = [];
    for (let i = 1; i <= 5; i++) {
        if (stars >= i) {
            starIcons.push(<BsStarFill key={i} />);
        } else if (stars >= i - 0.5) {
            starIcons.push(<BsStarHalf key={i} />);
        } else {
            starIcons.push(<BsStar key={i} />);
        }
    }

    return (
        <Wrapper>
            <div className="stars">{starIcons}</div>
            <p className="reviews">({reviews} customer reviews)</p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    .stars {
        color: #ffb900;
        font-size: 1rem;
        display: flex;
        margin-right: 0.25rem;
    }
    p {
        margin-left: 0.5rem;
        margin-bottom: 0;
    }
    margin-bottom: 0.5rem;
`;

export default Stars;
