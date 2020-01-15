import React, { useContext } from 'react'
import Toggle from 'react-toggle'

import {ThemeContext} from '../context/theme-context'

const Toggler = () => {
    const theme = useContext(ThemeContext)
    return(
        <div className="toggle-button"><Toggle className="react-toggle" checked={theme.isDark} onChange={theme.themeChanger} /><span>{theme.isDark ? 'Dark' : 'Light'}</span></div>
    )
}

export default Toggler