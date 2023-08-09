import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
    ProductsProvider,
    FilterProvider,
    CartProvider,
    UserProvider,
} from "./context";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_APP_AUTH_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        cacheLocation="localstorage"
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
