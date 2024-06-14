import { useUser } from '@clerk/clerk-react'
import React, { useContext, useEffect, useState } from 'react'

export const UserContext = React.createContext(null)

export const UserProvider = ({ children }) => {
    const { isLoaded, isSignedIn, user } = useUser()
    const [myUser, setMyUser] = useState(null)

    useEffect(() => {
        setMyUser(user)
    }, [user])

    return <UserContext.Provider value={{ isSignedIn, isLoaded, myUser }}>{children}</UserContext.Provider>
}

export const useUserContext = () => {
    return useContext(UserContext)
}
