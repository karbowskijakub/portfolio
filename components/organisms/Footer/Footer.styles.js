import styled from 'styled-components'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

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
justify-content:space-between;
align-items:center;
flex-direction: row;
position:relative;


`

export const IconsWrapper = styled.div`
display: inline-block;

`

export const LinkedinIcon = styled(AiFillLinkedin)`
font-size: ${({ theme }) => theme.fontSize.xxl};
margin:0px 15px;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
`

export const GithubIcon = styled(AiFillGithub)`
font-size: ${({ theme }) => theme.fontSize.xxl};
margin-right:0.5em;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
`
export const StyledLogo= styled.div`
padding:0 4em;
z-index:0;
`
export const Background = styled.div`
height:100%;
background-color:${({ theme }) => theme.colors.grey};
min-width:30%;
position:absolute;
left:0;
z-index:-1;


`