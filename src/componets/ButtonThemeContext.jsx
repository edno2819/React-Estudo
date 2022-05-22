import React, { memo } from "react";
import { useTheme, themes } from '../context/theme'

const ButtonThemeContext = () => {
    const { theme, setTheme } = useTheme()


    return (
        <div>
            <button onClick={ () => setTheme(theme===themes.light ? themes.dark : themes.light)}>{theme===themes.light ? 'dark' : 'light'}</button>
        </div>
    )
}


export default ButtonThemeContext;
