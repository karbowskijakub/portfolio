import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    background:${({ theme }) => theme.colors.white};
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }

  html,
body,
#root {
  scroll-behavior: smooth;
    overflow-x: hidden;
}
#portfolio{
  scroll-margin-top: 40px;
}
#about{
  scroll-margin-top: 150px;
}
`
export default GlobalStyles
