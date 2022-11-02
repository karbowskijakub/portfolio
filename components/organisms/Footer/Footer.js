import React from 'react'
import {
	Wrapper,
	Container,
	StyledLogo,
	IconsWrapper,
	GithubIcon,
	LinkedinIcon,
	Background,
	StyLi,
} from './Footer.styles'
import Link from 'next/link'

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<StyledLogo>Created By Jakub Karbowski</StyledLogo>
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
				<Background />
			</Container>
		</Wrapper>
	)
}

export default Footer
