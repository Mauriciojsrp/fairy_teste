import { createContext, ReactNode, useEffect, useState } from "react"

type AuthContext = {
    token: string;
    setToken: (value: string) => void;
}

type AuthProvider = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({children}: AuthProvider)  {
    const [token, setToken] = useState<string>(() => localStorage.getItem('authToken') || '');

    useEffect(() => {
        // Recupera o token do localStorage quando o componente é montado
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleSetToken = (newToken: string) => {
        // Define o token e armazena no localStorage
        setToken(newToken);
        localStorage.setItem('authToken', newToken);
    };

    return (
        <AuthContext.Provider
        value={{
            token,
            setToken: handleSetToken
        }} 
        >
            {children}
        </AuthContext.Provider>
    )
}