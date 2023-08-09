import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper className="page section section-center">
                <img src={aboutImg} alt="nice desk" />
                <article>
                    <div className="title">
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p className="text-justify">
                    Welcome to Arcadion, your ultimate destination for all things arcade, VR, and gaming consoles, both old and new! We are passionate about gaming and believe in providing top-quality products to fellow enthusiasts. Our curated collection boasts a vast array of classic arcade machines, cutting-edge VR gear, and a wide selection of retro and modern gaming consoles. Whether you are a nostalgic gamer seeking a trip down memory lane or an adventure-seeker eager to embrace the latest VR technologies, Arcadion has something for everyone. Our team is dedicated to ensuring a seamless shopping experience, prompt deliveries, and outstanding customer support. Join us on this thrilling gaming journey and unlock a world of immersive entertainment with Arcadion!
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default AboutPage;
