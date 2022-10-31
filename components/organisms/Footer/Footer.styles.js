import styled from 'styled-components'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import breakpoints from '../../breakpoints/breakpoints'

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:80px;
background:transparent;
z-index:5;

`

export const Container = styled.div`
height:100%;
width:1400px;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
position:relative;
@media only screen and ${breakpoints.device.xs}{
	flex-direction:row;
	justify-content:space-between;
  }


`

export const IconsWrapper = styled.div`
display: inline-block;

`

export const LinkedinIcon = styled(AiFillLinkedin)`
font-size: ${({ theme }) => theme.fontSize.xl};
margin:0px 15px;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
@media only screen and ${breakpoints.device.xs}{
	font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`

export const GithubIcon = styled(AiFillGithub)`
font-size: ${({ theme }) => theme.fontSize.xl};
margin-right:0.5em;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
@media only screen and ${breakpoints.device.xs}{
	font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`
export const StyledLogo= styled.div`
padding:0 4em;
z-index:0;
font-size: ${({ theme }) => theme.fontSize.m};
@media only screen and ${breakpoints.device.xs}{
	font-size: ${({ theme }) => theme.fontSize.l};
  }

`
export const Background = styled.div`
height:100%;
background-color:${({ theme }) => theme.colors.grey};
width:30%;
position:absolute;
left:0;
z-index:-1;


`