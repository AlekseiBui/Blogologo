import { createContext, ReactNode, useState } from 'react'

type ThemeState = {
    theme: 'dark' | 'light'
}

type ThemeContext = {
    theme: ThemeState
    setTheme: React.Dispatch<React.SetStateAction<ThemeState>>
}

const defaultState = {} as ThemeContext

export const ThemeContext = createContext<ThemeContext>(defaultState)

type Props = {
    children: ReactNode
}

const ThemeContextComponent = (props: Props) => {
    const [themeState, setThemeState] = useState<ThemeState>({
        theme: 'light'
    })

    const ProviderValue = {
        theme: themeState,
        setTheme: setThemeState
    }

    return (
        <ThemeContext.Provider value={ProviderValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextComponent
