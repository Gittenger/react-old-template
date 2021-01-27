import { createGlobalStyle } from 'styled-components'

import fontFaces from './typography/fontFaces'
import resetCSS from './css/resetCSS.js'

const GlobalStyles = createGlobalStyle`
${fontFaces}
${resetCSS}

body {
	${({ theme: { css } }) => css.flexCenterCol};
    font-size: 1.8rem;
    width: 100vw;

    background-color: ${({ theme: { colors } }) => colors.primary};
}

#root {
	${({ theme: { css } }) => css.flexCenterCol};
    
    /* set font vars in root */
    ${({ theme: { typography } }) => typography.fontVars.fontMain};

    /* set shared typography styles */
    ${({ theme: { typography } }) => typography.sharedStyles};
}
`

export default GlobalStyles
