import styled, {keyframes} from 'styled-components'
import breakpoints from '../../breakpoints/breakpoints';
import {Button} from '../../atoms/Button/Button';
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
display:flex;
align-items:center;
justify-content:center;
height:100%;
background-color:${({ theme }) => theme.colors.grey};
min-width:100%;
position:relative;
right:0;

@media only screen and ${breakpoints.device.sm}{
  min-width:45%;
}



`
export const HeroButton = styled(Button)`
width:90%;
@media only screen and ${breakpoints.device.xs}{
  width:100%;
}
&.active{
  display:none;
}
`

export const Container = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;

position:relative;
@media only screen and ${breakpoints.device.lg}{
  width:1200px;
}
@media only screen and ${breakpoints.device.sm}{
  justify-content:space-between;
  align-items:center;
  flex-direction: row;
}

`

export const InfoContainer = styled.div`

text-direction:left;
display:flex;
justify-content:center;
flex-direction:column;
padding: 0 3em;
min-width:20%;
display:none;
@media only screen and ${breakpoints.device.sm}{
 
  display:block;
}


`

export const FirstField = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:80%
height:60%;


`

export const InfoContainerMobile = styled.div`

text-direction:left;
display:flex;
justify-content:center;
flex-direction:column;
padding: 0 3em;
height:60%;
min-width:30%;
display:block;
@media only screen and ${breakpoints.device.lg}{
  font-size:${({ theme }) => theme.fontSize.xxl};
  
}
@media only screen and ${breakpoints.device.sm}{
 
  display:none;
}


`

export const FirstPa = styled.h2`
color:${({ theme }) => theme.colors.white};
font-size:${({ theme }) => theme.fontSize.l};



@media only screen and ${breakpoints.device.xs}{
  font-size:${({ theme }) => theme.fontSize.xl};
  color:${({ theme }) => theme.colors.white};
}
@media only screen and ${breakpoints.device.lg}{
  font-size:${({ theme }) => theme.fontSize.xxl};
}


`
export const SecondPa = styled.h1`
color:${({ theme }) => theme.colors.black};
font-size:${({ theme }) => theme.fontSize.xl};
text-transform:uppercase;
margin-bottom:0;
margin-top:0;
@media only screen and ${breakpoints.device.xs}{
  font-size:${({ theme }) => theme.fontSize.xxl};
 
}

@media only screen and ${breakpoints.device.lg}{
  font-size:${({ theme }) => theme.fontSize.xxxl};
}


`
export const ThirdPa = styled.h2`
color:${({ theme }) => theme.colors.black};
font-size:${({ theme }) => theme.fontSize.l};
text-transform:uppercase;
color: ${({ theme }) => theme.colors.blue};
margin-top:0;

@media only screen and ${breakpoints.device.lg}{
  font-size:${({ theme }) => theme.fontSize.xxl};
}
@media only screen and ${breakpoints.device.xs}{
  font-size:${({ theme }) => theme.fontSize.xxl};
 
}

`

export const ImgContainer = styled.div`
position:absolute;
bottom:0;
display:none;


@media only screen and ${breakpoints.device.sm}{
  left:-12.5em;
}

`
export const SymbolsContainer = styled.div`

position:absolute;
bottom:16em;
left:14.6em;
filter: invert(53%) sepia(43%) saturate(5099%) hue-rotate(200deg) brightness(98%) contrast(165%);
width:300px;
height:170px;
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

