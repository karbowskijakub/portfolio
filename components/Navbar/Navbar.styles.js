import styled from 'styled-components'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

export const Wrapper = styled.div`
	position: fixed;
	height: 90px;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	transition: 0.3s ease-in;
	overflow: hidden;
	background-color: none;
	&.active {
		background: rgba(0,0,0,0.5);
		backdrop-filter: blur(5px);
	}
`

export const StyledLink = styled.a`
	padding: 0rem 2rem;
	text-decoration:none;
	color:black;
	transition: color 0.2s;
	font-size: ${({ theme }) => theme.fontSize.l};
	&:hover{
		color:${({ theme }) => theme.colors.blue};
	}
`
export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1240px;
	margin: auto;
	height: 100%;
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
export const StyledLogo = styled.a`
font-size: ${({ theme }) => theme.fontSize.xl};
padding:0 1em;
left:0;
text-decoration:none;
color:black;
`
export const IconsWrapper = styled.div`
display: inline-block;

`
export const Links =styled.div`
display:flex;
align-items:center;
`