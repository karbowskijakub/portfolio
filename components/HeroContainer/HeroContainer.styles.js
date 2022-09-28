import styled from 'styled-components'

import Image from 'next/image'
export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
height:900px;
`
export const Background = styled.div`
height:100%;
background-color:${({ theme }) => theme.colors.grey};
width:520px;


`

export const Container = styled.div`
height:100%;
width:1240px;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction: row;
position:relative;


`

export const InfoContainer = styled.div`
text-direction:left;
display:flex;
justify-content:center;
flex-direction:column;
padding: 0 1em;
max-width:500px;



`
export const FirstPa = styled.h2`
color:${({ theme }) => theme.colors.grey};
font-size:${({ theme }) => theme.fontSize.xxl};


`
export const SecondPa = styled.h1`
color:${({ theme }) => theme.colors.black};
font-size:${({ theme }) => theme.fontSize.xxxl};
text-transform:uppercase;
margin-bottom:0;
margin-top:0;

`
export const ThirdPa = styled.h2`
color:${({ theme }) => theme.colors.black};
font-size:${({ theme }) => theme.fontSize.xxl};
text-transform:uppercase;
color: ${({ theme }) => theme.colors.blue};
margin-top:0;

`

export const ImgContainer = styled.div`
position:absolute;
bottom:0;
right:10em;
`
export const SymbolsContainer = styled.div`
position:absolute;
bottom:18em;
right:14em;
filter: invert(53%) sepia(43%) saturate(5099%) hue-rotate(200deg) brightness(98%) contrast(165%);

`
export const StyledHtml = styled(Image)`
filter: invert(53%) sepia(43%) saturate(3099%) hue-rotate(200deg) brightness(115%) contrast(275%);

`
export const StyledJs = styled(Image)`
filter: contrast(145%) ;
`