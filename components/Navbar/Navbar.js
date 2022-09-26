import Link from 'next/link'
import React, { useState } from 'react'
import { StyledLink, LinkedinIcon, GithubIcon, Wrapper, Nav,StyledLogo,IconsWrapper,Links  } from './Navbar.styles'
import { useEffect } from 'react'


const Navbar = () => {

	const [navbar,setNavbar]=useState(false);

	const changeNav = () => {
	
		if(window.scrollY >= 90){
			setNavbar(true)
		}else
		setNavbar(false);
	}
	useEffect(() => {
	window.addEventListener('scroll', changeNav)
}, []);

	return (
		<Wrapper className={navbar ? "active" : null}>
		<Nav  >
			<div>
				<Link href='/' passHref>
					<StyledLogo>Jakub Karbowski</StyledLogo>
				</Link>
                </div>
                <Links>
                <Link href='/' passHref>
					<StyledLink>About</StyledLink>
				</Link>
                <Link href='/' passHref>
					<StyledLink>Projects</StyledLink>
				</Link>
                <Link href='/' passHref>
					<StyledLink>Contact</StyledLink>
				</Link>
				<IconsWrapper>
				<Link href='/' passHref>
					<LinkedinIcon/>
				</Link>
				<Link href='/' passHref>
					<GithubIcon/>
				</Link>
				</IconsWrapper>
			</Links>
		</Nav>
		</Wrapper>
		
	)
}


export default Navbar