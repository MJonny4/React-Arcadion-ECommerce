import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about",
    },
    {
        id: 3,
        text: "products",
        url: "/products",
    },
];

export const services = [
    {
        id: 1,
        icon: <GiCompass />,
        title: "mission",
        text: "At Arcadion, our mission is to ignite nostalgic joy and gaming passions by providing a diverse selection of arcade, VR, and gaming consoles.",
    },
    {
        id: 2,
        icon: <GiDiamondHard />,
        title: "vision",
        text: "Our Vision: Arcadion aims to become the ultimate gaming destination, offering a diverse range of arcade, VR, and classic consoles, catering to every gamer's nostalgia and passion for gaming.",
    },
    {
        id: 3,
        icon: <GiStabbedNote />,
        title: "history",
        text: "Arcadion: Pioneering gaming since 2005. We're your ultimate destination for arcade, VR, and classic & modern consoles. Level up with us!",
    },
];

export const products_url = "/.netlify/functions/products";

export const single_product_url = `/.netlify/functions/single-product?id=`;
