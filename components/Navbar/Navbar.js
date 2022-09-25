import Link from 'next/link'
import React, { useState } from 'react'
import { Nav } from './Navbar.styles'
import { StyledLink } from './Navbar.styles'
import { useEffect } from 'react'
import { Wrapper } from './Navbar.styles'

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
					<StyledLink>Jakub Karbowski</StyledLink>
				</Link>
                </div>
                <div>
                <Link href='/' passHref>
					<StyledLink>About</StyledLink>
				</Link>
                <Link href='/' passHref>
					<StyledLink>Projects</StyledLink>
				</Link>
                <Link href='/' passHref>
					<StyledLink>Contact</StyledLink>
				</Link>
			</div>
		</Nav>
		</Wrapper>
		
	)
}


export default Navbar