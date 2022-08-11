import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        background: #080b0f;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        font-family: sans-serif;
    }
`

export default GlobalStyle;