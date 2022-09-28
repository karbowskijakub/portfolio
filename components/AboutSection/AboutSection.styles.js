import styled from 'styled-components'
import Image from 'next/image'

import {TbSquareRotated} from "react-icons/tb"

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
height:700px;

`
export const Container = styled.div`
height:80%;
width:1200px;
display: grid;
grid-template-row:  1fr 3fr;
grid-template-column:  1fr 1fr;
position:relative;
margin-bottom:7em;
margin-top:10em;

`
export const Title =styled.div`
grid-row: 1/1;
grid-column: 1/3;
display:flex;
justify-content:center;
align-items:center;

`
export const TechStack =styled.div`
min-width:100%;
height:100%;
grid-row: 2/3;
grid-column: 2/2;
display: grid;
gap:5px;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);


`
export const InfoContainer =styled.div`
grid-row: 2/3;
grid-column: 1/2;
height:100%;
max-width:400px;
display:flex;
align-items:center;
padding: 0 4em;
font-size:  ${({ theme }) => theme.fontSize.l};


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
height:50%;
min-width:100px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
transition: 0.8s all;
&:hover{
    background-color: ${({ theme }) => theme.colors.blue};
}


`
export const ParagraphContainer =styled.div`
height:40%;
display:flex;
align-items:center;
`
export const TechContainer =styled.div`
min-width:600px;
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