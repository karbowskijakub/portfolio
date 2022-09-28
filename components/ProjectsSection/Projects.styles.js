import styled from 'styled-components'
import Image from 'next/image'
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLink} from 'react-icons/ai';
// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const Wrapper = styled.div`
margin-top:8em;
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
flex-direction:column;
background:#F3F4F6;
`

export const Container = styled.div`
margin-bottom:7em;
width: 1240px;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`
export const TitleContainer = styled.div`
height:10em;
display:flex;
align-items:center;

`

// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const ProjectContainer = styled.div`
display:flex;
flex-direction:row;
background:${({ theme }) => theme.colors.white};
border-radius:8px;
overflow:hidden;


`
export const InfoBox = styled.div`
padding:3em;
max-width:500px;
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
`
export const ButtonsBox = styled.div`
margin-top:2em;

`
export const ButtonsDiv = styled.div`
margin-bottom:1em;
display:flex;
flex-direction:row;

`
export const FirstButton = styled.button`
display:flex;
justify-content:center;
align-items:center;
margin-right:1em;
padding:0.8em 2em;
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

`
export const SecondButton = styled.button`
text-transform:uppercase;
display:flex;
justify-content:center;
align-items:center;
padding:0.8em 2em;
background-color:${({ theme }) => theme.colors.black};
color:${({ theme }) => theme.colors.white};
border-radius:5px;
cursor:pointer;
transition:0.5s background-color;
border:none;
&:hover{
    background-color:${({ theme }) => theme.colors.blue};
}

`

// import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox} from './Projects.styles'

export const TechnologyDiv = styled.div`
span{
margin-right:0.5em;
border:1px solid grey;
border-radius:10px;
font-size:${({ theme }) => theme.fontSize.m};
padding:3px 4px;
}
color:grey;
opacity:0.7;


`
export const ImageBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width:600px;
min-height:412px;
`
export const ImageContainer = styled.div`

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