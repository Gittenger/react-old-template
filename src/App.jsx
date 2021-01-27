import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'

import CIndex from './components/components.index.js'

function App() {
	const [theme, setTheme] = useState('light')
	const {
		TComp: { P },
	} = CIndex

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<div style={{ height: '15rem' }}></div>
			<button onClick={changeTheme}>CHANGE THEME</button>
			<P>Here is some sample text. Hit the button to change the theme.</P>
		</ThemeProvider>
	)
}

export default App
