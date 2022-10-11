import styled, {keyframes} from 'styled-components'

import Image from 'next/image'
export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:900px;
background:${({ theme }) => theme.colors.white};
`
export const Background = styled.div`
height:100%;
background-color:${({ theme }) => theme.colors.grey};
min-width:45%;
position:relative;
right:0;


`

export const Container = styled.div`
height:100%;
width:1400px;
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
padding: 0 3em;
min-width:20%;


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
left:-12.5em;


`
export const SymbolsContainer = styled.div`
position:absolute;
bottom:16em;
left:2.2em;
filter: invert(53%) sepia(43%) saturate(5099%) hue-rotate(200deg) brightness(98%) contrast(165%);

`
export const StyledHtml = styled(Image)`
filter: invert(53%) sepia(43%) saturate(3099%) hue-rotate(200deg) brightness(115%) contrast(275%);

`
export const StyledJs = styled(Image)`
filter: contrast(145%) ;
`
const wave = keyframes`
0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
`;

export const WaveIcon = styled.span`
font-size:1.2em;
animation-name: ${wave}; 
animation-duration: 2.5s;        
animation-iteration-count: infinite;  
transform-origin: 70% 70%;       
display: inline-block;
`

