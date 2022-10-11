import Link from 'next/link'
import React, { useState } from 'react'
import { StyledLink, LinkedinIcon, GithubIcon, Wrapper, Nav,StyledLogo,IconsWrapper,Links,HamburgerMenu ,HamburgerDiv ,MobileMenu,LogoDiv, NavBackground, HamburgerMenuBg ,HamburgerDivBg,BgContainer,SecNavBg,WhiteBg, LinksBg,Cont,Container,StyledLinkMobile,LinkedinIconMobile,GithubIconMobile } from './Navbar.styles'
import { useEffect } from 'react'


const Navbar = () => {


	const[isOpen,setOpen] = useState(false)
	const [navbar,setNavbar]=useState(false);


	
	const changeNav = () => {
		
		if(window.scrollY >= 90 ){
			setNavbar(true)
		}
		
		else
		setNavbar(false);
	
	
}
	useEffect(() => {
	window.addEventListener('scroll', changeNav)
}, []);

	return (<Container>

		<NavBackground className={isOpen ? "active" : null}>
		<LinksBg className={isOpen ? "active" : null}>
                <Link href='/' passHref>
					<StyledLinkMobile>About</StyledLinkMobile>
				</Link>
                <Link href='/' passHref>
				<StyledLinkMobile>Projects</StyledLinkMobile>
				</Link>
                <Link href='/' passHref>
				<StyledLinkMobile>Contact</StyledLinkMobile>
				</Link>
				<IconsWrapper>
				<Link href='https://www.linkedin.com/in/jakub-karbowski-48a254217/' passHref>
					<LinkedinIconMobile/>
				</Link>
				<Link href='https://github.com/karbowskijakub' passHref>
					<GithubIconMobile/>
				</Link>
				</IconsWrapper>
			</LinksBg>
			<WhiteBg className={isOpen ? "active" : null}>
			<LogoDiv>
				<Link href='/' passHref>
					<StyledLogo>Jakub Karbowski</StyledLogo>
				</Link>
                </LogoDiv>
			<HamburgerDiv>
<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}> </HamburgerMenu>
</HamburgerDiv>
			</WhiteBg>
			</NavBackground>
		
		<Wrapper className={navbar ? "active" : null}>
	<WhiteBg className={isOpen ? "active" : null}/>
	
		<Nav  >
		
			<LogoDiv>
				<Link href='/' passHref>
					<StyledLogo>Jakub Karbowski</StyledLogo>
				</Link>
                </LogoDiv>
				<HamburgerDiv>
<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}> </HamburgerMenu>
</HamburgerDiv>

<MobileMenu ></MobileMenu>

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
				<Link href='https://www.linkedin.com/in/jakub-karbowski-48a254217/' passHref>
					<LinkedinIcon/>
				</Link>
				<Link href='https://github.com/karbowskijakub' passHref>
					<GithubIcon/>
				</Link>
				</IconsWrapper>
			</Links>
		</Nav>
		</Wrapper>
		</Container>
	)
}


export default Navbar