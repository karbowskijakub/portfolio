import styled from 'styled-components'
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLink} from 'react-icons/ai';
import breakpoints from '../../breakpoints/breakpoints';
import { motion } from 'framer-motion';
// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const Wrapper = styled(motion.div)`
margin-top:4em;
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
flex-direction:column;
background:#F3F4F6;
`

export const Container = styled(motion.div)`
margin-bottom:7em;
width: 90%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:0 4em;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius:8px;
background:${({ theme }) => theme.colors.white};
@media only screen and ${breakpoints.device.lgx}{
    width: 1200px;
 }
`


export const TitleContainer = styled.div`
height:10em;
display:flex;
align-items:center;

`

// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const ProjectContainer = styled(motion.div)`
display:flex;
flex-direction:column;
background:${({ theme }) => theme.colors.white};
border-radius:8px;
overflow:hidden;

@media only screen and ${breakpoints.device.md}{
    flex-direction:row;
 }


`
export const InfoBox = styled.div`
padding:3em 2em;
width:100%:
h1{
    margin:0;
}
h4{
margin-top:0em;
color:grey;
opacity:0.5;
}
p{
    margin-top:2em;
}
@media only screen and ${breakpoints.device.md}{
    width:40%;
 }
`
export const ButtonsBox = styled.div`
margin-top:6em;

`
export const ButtonsDiv = styled.div`
margin-bottom:1em;
display:flex;
flex-direction:row;

`
export const FirstButton = styled.button`
padding:0.3em 0.5em;
display:flex;
justify-content:center;
align-items:center;
margin-right:1em;

text-transform:uppercase;
background-color:${({ theme }) => theme.colors.black};
color:${({ theme }) => theme.colors.white};
border-radius:5px;
cursor:pointer;
transition:0.5s background-color;
border:none;
&:hover{
    background-color:${({ theme }) => theme.colors.blue};
}
@media only screen and ${breakpoints.device.xxs}{
    padding:0.8em 2em;
 }

`
export const SecondButton = styled.button`
padding:0.3em 0.5em;
text-transform:uppercase;
display:flex;
justify-content:center;
align-items:center;
background-color:${({ theme }) => theme.colors.black};
color:${({ theme }) => theme.colors.white};
border-radius:5px;
cursor:pointer;
transition:0.5s background-color;
border:none;
&:hover{
    background-color:${({ theme }) => theme.colors.blue};
}
@media only screen and ${breakpoints.device.xxs}{
    padding:0.8em 2em;
 }

`

// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const TechnologyDiv = styled.div`

span{

margin-right:0.5em;
border:1px solid grey;
border-radius:10px;
font-size:${({ theme }) => theme.fontSize.sm};
padding:3px 4px;

@media only screen and ${breakpoints.device.xss}{
    font-size:${({ theme }) => theme.fontSize.m};
 }


}
color:grey;
opacity:0.7;


`
export const ImageBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
padding:3em 0;


`
export const ImageContainer = styled.div`
display:block;
width:100%;
height:100%;
border-radius:10px;
overflow:hidden;


`

export const Share =styled(AiOutlineLink)`

color:${({ theme }) => theme.colors.white};
font-size:${({ theme }) => theme.fontSize.xl};
margin-left:0.4em;
`

export const GitHub =styled(AiFillGithub)`
margin-left:0.4em;
color:${({ theme }) => theme.colors.white};
font-size:${({ theme }) => theme.fontSize.xl};

`