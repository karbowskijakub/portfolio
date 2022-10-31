import MainTemplate from '../components/Templates/MainTemplate'
import React from 'react'
import GlobalStyles from '../assets/styles/globalStyles'
import { ThemeProvider } from 'styled-components';
import {theme} from '../assets/styles/theme';
import fonts from '../assets/styles/fonts.css';
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const[isOpen,setOpen] = useState(false)
  return(
<ThemeProvider theme={theme}>
<GlobalStyles />
  <MainTemplate isOpen={isOpen} setOpen={setOpen}>
  <Component {...pageProps} isOpen={isOpen} setOpen={setOpen} />
</MainTemplate>
</ThemeProvider>


  )
}

export default MyApp
