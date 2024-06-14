import { useUser } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user } = useUser()

    if (!user) {
        return <Navigate to='/'></Navigate>
    }

    return <>{children}</>
}

export default PrivateRoute
