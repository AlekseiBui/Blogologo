import { createContext, ReactNode, useState, useContext } from "react";

type AuthContextType = {
    isAuthorized: boolean
    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthProviderProps = {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState(false)

    const Login = () => {
        setAuth(true)
    }

    const Logout = () => {
        setAuth(false)
    }

    const providerValue: AuthContextType = {
        isAuthorized: auth,
        login: Login,
        logout: Logout
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}