import styled from 'styled-components'
import { motion } from 'framer-motion'
import breakpoints from '../../breakpoints/breakpoints'

export const Button = styled.div`
	position: relative;
	display: flex;
	items-align: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 5px;
	padding: 1em 2em;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.grey};
	font-weight: bold;
	font-size: 15px;
	margin-top: 0.5em;
	border: none;
	overflow: hidden;
	z-index: 10000;
	max-width: 300px;
	transition: color 1s ease-out;
	&:hover {
		color: ${({ theme }) => theme.colors.black};
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: -50px;
		border-bottom: 100px solid ${({ theme }) => theme.colors.blue};
		transform: translateX(-100%);
		transition: transform 0.5s linear;
		border-right: 50px solid transparent;
		z-index: -1;
	}
	&:hover::before {
		transform: translateX(0);
	}
`
export const HeroButton = styled(motion.button)`
	width: 100%;
	font-size: ${({ theme }) => theme.fontSize.m};
	@media only screen and ${breakpoints.device.xs} {
		font-size: ${({ theme }) => theme.fontSize.l};
		width: 100%;
	}
	&.active {
		display: none;
	}

	position: relative;
	display: flex;
	items-align: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 5px;
	padding: 1em 2em;
	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.grey};
	font-weight: bold;
	margin-top: 0.5em;
	border: none;
	overflow: hidden;
	z-index: 10000;
	max-width: 300px;
	transition: color 1s ease-out;
	&:hover {
		color: ${({ theme }) => theme.colors.black};
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: -50px;
		border-bottom: 100px solid ${({ theme }) => theme.colors.blue};
		transform: translateX(-100%);
		transition: transform 0.5s linear;
		border-right: 50px solid transparent;
		z-index: -1;
	}
	&:hover::before {
		transform: translateX(0);
	}
`
