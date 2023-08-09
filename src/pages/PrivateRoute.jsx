import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
        const { user } = useAuth0();

        if (!user) {
                return <Navigate to="/"></Navigate>;
        }

        return <>{children}</>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;