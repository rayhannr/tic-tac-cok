import {useState, useEffect} from 'react'

const appThemes = {
    dark: {
        backgroundColor: "#15202B",
        winningMessageColor: "rgba(9, 17, 26, .8)",
        contentColor: "#FFAD1F",
        hoverColor: "#FFE0B8"
    },
    light: {
        backgroundColor: "#F1F3FF",
        winningMessageColor: "rgba(242, 244, 255, 0.8)",
        hoverColor: "#657ce2",
        contentColor: "#4764E6"
    }
}

export const useTheme = () => {
    const [theme, setTheme] = useState('dark')
    let isDark = theme !== 'light'

    const setCSSVariables = theme => {
        for (const value in theme) {
          document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    }

    const themeChanger = () => {
        if(!isDark){
            setTheme('dark')
            setCSSVariables(appThemes.dark)
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            setCSSVariables(appThemes.light)
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const appliedTheme = localStorage.getItem('theme')
        if(appliedTheme && appliedTheme === 'light'){
            setTheme('light')
            setCSSVariables(appThemes.light)
        } else {
            setTheme('dark')
            setCSSVariables(appThemes.dark)
        }
    }, [])

    return {theme, isDark, themeChanger}
}