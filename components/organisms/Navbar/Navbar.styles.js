import styled from 'styled-components'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import breakpoints from '../../breakpoints/breakpoints';
import {Twirl as Hamburger} from 'hamburger-react';
import { motion } from 'framer-motion';

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
		background: rgba(0,0,0,0.3);
		backdrop-filter: blur(5px);
	}
	&.white {
		background: white;
		
	}
`
export const HamburgerMenu = styled(Hamburger)`
`
export const HamburgerDiv = styled.div`
margin-right:0.5em;
z-index:20000;
@media only screen and ${breakpoints.device.md}{
	display: none;
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
	max-width: 1400px;
	margin: auto;
	height: 100%;
`

export const LinkedinIcon = styled(AiFillLinkedin)`
font-size: ${({ theme }) => theme.fontSize.xxl};
color:${({ theme }) => theme.colors.black};
margin:0px 15px;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
`

export const GithubIcon = styled(AiFillGithub)`
color:${({ theme }) => theme.colors.black};
font-size: ${({ theme }) => theme.fontSize.xxl};
margin-right:0.5em;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.blue};
	transform: scale(1.2)
}
`
export const StyledLogo = styled(motion.a)`
font-size: ${({ theme }) => theme.fontSize.l};
left:0;
text-decoration:none;
margin-left:2em;
color:black;
@media only screen and ${breakpoints.device.xss}{
	font-size: ${({ theme }) => theme.fontSize.xl};
}
`
export const IconsWrapper = styled.div`
display: inline-block;
`
export const Links =styled.div`
z-index:200;
display:flex;
align-items:center;
justify-content:center;
@media only screen and ${breakpoints.device.xsss}{
	display: none;
}
@media only screen and ${breakpoints.device.md}{
	display: flex;
}
`
export const MobileMenu = styled.div`
display:flex;
align-items:center;
position: fixed;
	height: 50%;
	width: 50%;
	top: 0;
	 right:0;
z-index:100;
	transition: transform 0.6s cubic-bezier(0.19,1,0.22,1);
	overflow: hidden;
	
`
export const LogoDiv = styled.div`
z-index:200
`
export const NavBackground = styled.div`
position:relative;
display:flex;
align-items:center;
justify-content:center;
position: fixed;
width:100%;
height:100%;
	top: 0;
	 right:0;
z-index:20;
	transition: transform 0.6s cubic-bezier(0.19,1,0.22,1);
	overflow: hidden;
	
background:${({ theme }) => theme.colors.blue};;
transform:translateX(100%);
opacity:0;
&.active {
	opacity:1;
	transform:translateX(0%);
}
`

export const HamburgerMenuBg = styled(Hamburger)`
`
export const HamburgerDivBg = styled.div`
@media only screen and ${breakpoints.device.md}{
	display: none;
}
`
export const BgContainer =styled.div`
position:relative;
width:100%;
height:100%;
`
export const WhiteBg =styled.div`
z-index:30;
position: fixed;
display:flex;
justify-content:space-between;
align-items:center;
	height: 90px;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 1;
	transition: 0.3s ease-in;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	opacity:0;
	&.active {
		opacity:1;
	}
`
export const LinksBg = styled.div`
width:300px;
height:300px;
z-index:20000;
font-size:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
opacity:0;
&.active {
opacity:1;
}
`
export const Cont = styled.div`
z-index:20000;
font-size:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`
export const Container = styled(motion.div)`
position:relative;
width:100%;
height:100%;
z-index:20000;
`

export const StyledLinkMobile = styled.a`
	padding: 1rem 2rem;
	text-decoration:none;
	color:black;
	transition: color 0.2s;
	font-size: ${({ theme }) => theme.fontSize.xl};
	&:hover{
		color:${({ theme }) => theme.colors.white};
		
	}
`
export const LinkedinIconMobile = styled(AiFillLinkedin)`
font-size: ${({ theme }) => theme.fontSize.xxxl};
color:${({ theme }) => theme.colors.black};
margin:0px 15px;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.white};
	transform: scale(1.2)
}
`

export const GithubIconMobile = styled(AiFillGithub)`
color:${({ theme }) => theme.colors.black};
font-size: ${({ theme }) => theme.fontSize.xxxl};
margin-right:0.5em;
cursor:pointer;
transition: all 0.3s;
&:hover{
	color:${({ theme }) => theme.colors.white};
	transform: scale(1.2)
}
`