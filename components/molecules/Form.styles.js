import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '../atoms/Button/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import breakpoints from '../breakpoints/breakpoints'

export const BoxDiv = styled(Box)`
	padding: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 80%;
	background: transparent;
	backdrop-filter: blur(5px);
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

	border-radius: 8px;
	@media only screen and ${breakpoints.device.xss} {
		padding: 1.5em 1em;
	}
	button {
		@media only screen and ${breakpoints.device.xss} {
			padding: 1em 2em;
			width: 100%;
		}
		height: 2.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		margin-top: 4em;
		text-transform: uppercase;
		background-color: ${({ theme }) => theme.colors.black};
		color: ${({ theme }) => theme.colors.white};
		border-radius: 5px;
		cursor: pointer;
		transition: 0.5s background-color;
		border: none;
		&:hover {
			background-color: ${({ theme }) => theme.colors.blue};
		}
	}
`
export const Text = styled(TextField)`
width:100%;

& label.Mui-focused {
  
    color: ${({ theme }) => theme.colors.black};
  }
  & .MuiInput-underline:after {
    border: 1px solid black;
    background:${({ theme }) => theme.colors.black};

  }
  & .MuiOutlinedInput-root {
 
    & fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
   
    }
    &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
     
    }
    &.Mui-focused fieldset {
        border-color: ${({ theme }) => theme.colors.blue};
       
    }
`
export const TextArea = styled(TextField)`
	width: 100%;

	& label.Mui-focused {
		color: ${({ theme }) => theme.colors.black};
	}
	& .MuiInput-underline:after {
		border: 1px solid ${({ theme }) => theme.colors.blue};
		background: ${({ theme }) => theme.colors.blue};
	}
	& .MuiInput-underline:after {
		border: 1px solid black;
		background: ${({ theme }) => theme.colors.black};
	}
	&:hover fieldset {
		border-color: ${({ theme }) => theme.colors.blue};
	}
	&.Mui-focused fieldset {
		border-color: ${({ theme }) => theme.colors.blue};
	}
`
export const InputBlock = styled.div`
	min-height: 6em;
	width: 100%;
`
