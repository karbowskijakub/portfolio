import styled from 'styled-components'
import Image from 'next/image'
import breakpoints from '../../breakpoints/breakpoints'
import {TbSquareRotated} from "react-icons/tb"
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;

background:${({ theme }) => theme.colors.white};

`
export const TwoContainers = styled.div`
display:flex;
flex-direction:column;
@media only screen and ${breakpoints.device.lg}{
    flex-direction:row;
}


`
export const Container = styled.div`
height:80%;
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
position:relative;
margin-bottom:7em;
margin-top:10em;
@media only screen and ${breakpoints.device.lg}{
    width:1200px;
 }

`
export const Title =styled.div`

display:flex;
justify-content:center;
align-items:center;

`
export const TechStack =styled(motion.div)`
width:100%;
height:100%;
grid-row: 2/3;
    grid-column: 2/2;
    display: grid;
    gap:5px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);


    @media only screen and ${breakpoints.device.xs}{
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

`
export const InfoContainer =styled.div`
grid-row: 2/3;
grid-column: 1/2;
height:100%;
width:100%;
display:flex;
align-items:center;
padding: 0 4em;
font-size:  ${({ theme }) => theme.fontSize.l};

@media only screen and ${breakpoints.device.lg}{
   width:400px;
}

`

export const Element =styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const IconContainer =styled.div`
background-color: ${({ theme }) => theme.colors.grey};;
height:100%;
width:70px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition: background-color 0.8s ease;
&:hover{
    background-color: ${({ theme }) => theme.colors.blue};
}
@media only screen and ${breakpoints.device.xs}{
    height:50%;
    width:100px;
 }


`
export const ParagraphContainer =styled.div`
height:40%;
display:flex;
align-items:center;
`
export const TechContainer =styled.div`
width:100%;
height:400px;
@media only screen and ${breakpoints.device.lg}{
    width:600px;
 }

`
export const StackTitle = styled.h3
`
text-align:center;
font-size:  ${({ theme }) => theme.fontSize.xl};
`

export const ImageStyle =styled(Image)`
border:none;
`

export const Shape =styled(TbSquareRotated)`
position:absolute;
font-size:200px;
color:${({ theme }) => theme.colors.blue};
opacity:0.3;
top:0.5em;
z-index:-5;
`;