import styled from 'styled-components'
import Image from 'next/image'
import {Button} from '../../atoms/Button/Button'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import breakpoints from '../../breakpoints/breakpoints'

export const BoxDiv = styled(Box)`
padding: 1.3em 1.3em;
width:40%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:80%;
background: transparent;
backdrop-filter: blur(5px);
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-right:5em;
border-radius:8px;

button {
display:flex;
justify-content:center;
align-items:center;
padding:1em 2em;
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
}


`
export const Text = styled(TextField)`
width:100%;
& label.Mui-focused {
  
    color: ${({ theme }) => theme.colors.black};
  }
  & .MuiInput-underline:after {
    border: 1px solid black;
    background:${({ theme }) => theme.colors.black};

  }
  & .MuiOutlinedInput-root {
 
    & fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
   
    }
    &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
     
    }
    &.Mui-focused fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
       
    }
`
export const TextArea = styled(TextField)`

width:100%;
& label.Mui-focused {
  color: ${({ theme }) => theme.colors.black};
}
  & .MuiInput-underline:after {
    border:1px solid ${({ theme }) => theme.colors.blue};
    background:${({ theme }) => theme.colors.blue};

  }
  & .MuiInput-underline:after {
    border: 1px solid black;
    background:${({ theme }) => theme.colors.black};

  }
    &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
     
    }
    &.Mui-focused fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
       
    }


  

`
export const InputBlock = styled.div`
min-height:18%;
width:100%;
`

export const StyledButton = styled(Button)`
margin-top:4em;
min-width:80%;
`

export const Wrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
width:100%;
height:800px;
background:${({ theme }) => theme.colors.white};

`
export const Container = styled.div`
z-index:0;
height:100%;
width:1400px;
display: flex;
justify-content:center;
align-items:center;
flex-direction:column;
position:relative;
`

export const Background = styled.div`
height:100%;
background-color:${({ theme }) => theme.colors.grey};
width:30%;
position:absolute;
left:0;
z-index:2;

`

export const ContactDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80%;
width:85%;
z-index:5;
@media only screen and ${breakpoints.device.xs}{
  width:65%;
}
@media only screen and ${breakpoints.device.md}{
  width:80%;
}
@media only screen and ${breakpoints.device.md}{
  width:80%;
}

`
export const TitleDiv = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;

`
export const ContactBox = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;



`
export const ImageDiv = styled.div`
width:100%;
height:100%;
display:none;
@media only screen and ${breakpoints.device.md}{
  display:block;
}

`

export const ButtonStyle = styled.div`

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

