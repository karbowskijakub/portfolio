import styled from 'styled-components'

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
		background: red;
	}
`

export const StyledLink = styled.a`
	padding: 0rem 2rem;
	text-decoration:none;
	color:black;
`
export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1240px;
	margin: auto;
	height: 100%;
	padding: 0 1rem;
`
