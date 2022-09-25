import MainTemplate from '../components/Templates/MainTemplate'
import React from 'react'
import GlobalStyles from '../assets/styles/globalStyles'
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/styles/theme';
import fonts from '../assets/styles/fonts.css';

function MyApp({ Component, pageProps }) {
  
  return(
<ThemeProvider theme={theme}>
<GlobalStyles />
  <MainTemplate>
  <Component {...pageProps} />
</MainTemplate>
</ThemeProvider>


  )
}

export default MyApp
