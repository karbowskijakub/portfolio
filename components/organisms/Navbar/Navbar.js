import Link from 'next/link'
import React, { useState } from 'react'
import {
	StyledLink,
	LinkedinIcon,
	GithubIcon,
	Wrapper,
	Nav,
	StyledLogo,
	IconsWrapper,
	Links,
	HamburgerMenu,
	HamburgerDiv,
	MobileMenu,
	LogoDiv,
	NavBackground,
	HamburgerMenuBg,
	HamburgerDivBg,
	BgContainer,
	SecNavBg,
	WhiteBg,
	LinksBg,
	Cont,
	Container,
	StyledLinkMobile,
	LinkedinIconMobile,
	GithubIconMobile,
} from './Navbar.styles'
import { useEffect } from 'react'
import { slideTop, slideBottom } from '../../animations/animations'

const Navbar = ({ isOpen, setOpen }) => {
	const [navbar, setNavbar] = useState(false)

	const changeNav = () => {
		if (window.scrollY >= 90) {
			setNavbar(true)
		} else setNavbar(false)
	}
	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	return (
		<Container variants={slideTop} custom={2} initial='initial' animate='animate'>
			<NavBackground className={isOpen ? 'active' : null}>
				<LinksBg className={isOpen ? 'active' : null}>
					<Link href='#about' passHref>
						<StyledLinkMobile>About</StyledLinkMobile>
					</Link>
					<Link href='#portfolio' passHref>
						<StyledLinkMobile>Projects</StyledLinkMobile>
					</Link>
					<Link href='#contact' passHref>
						<StyledLinkMobile>Contact</StyledLinkMobile>
					</Link>
					<IconsWrapper>
						<Link href='https://www.linkedin.com/in/jakub-karbowski-48a254217/' passHref>
							<a>
								<LinkedinIconMobile />
							</a>
						</Link>
						<Link href='https://github.com/karbowskijakub' passHref>
							<a>
								<GithubIconMobile />
							</a>
						</Link>
					</IconsWrapper>
				</LinksBg>
				<WhiteBg className={isOpen ? 'active' : null}>
					<LogoDiv>
						<Link href='/' passHref>
							<StyledLogo>Jakub Karbowski</StyledLogo>
						</Link>
					</LogoDiv>
					<HamburgerDiv>
						<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}>
							{' '}
						</HamburgerMenu>
					</HamburgerDiv>
				</WhiteBg>
			</NavBackground>

			<Wrapper className={navbar ? 'active' : null}>
				<WhiteBg className={isOpen ? 'active' : null} />

				<Nav>
					<LogoDiv>
						<Link href='/' passHref>
							<StyledLogo>Jakub Karbowski</StyledLogo>
						</Link>
					</LogoDiv>
					<HamburgerDiv>
						<HamburgerMenu toggled={isOpen} rounded toggle={setOpen}>
							{' '}
						</HamburgerMenu>
					</HamburgerDiv>

					<Links>
						<Link href='#about' passHref>
							<StyledLink>About</StyledLink>
						</Link>
						<Link href='#portfolio' passHref>
							<StyledLink>Projects</StyledLink>
						</Link>
						<Link href='#contact' passHref>
							<StyledLink>Contact</StyledLink>
						</Link>
						<IconsWrapper>
							<Link href='https://www.linkedin.com/in/jakub-karbowski-48a254217/' passHref>
								<a>
									<LinkedinIcon />
								</a>
							</Link>
							<Link href='https://github.com/karbowskijakub' passHref>
								<a>
									<GithubIcon />
								</a>
							</Link>
						</IconsWrapper>
					</Links>
				</Nav>
			</Wrapper>
		</Container>
	)
}

export default Navbar
