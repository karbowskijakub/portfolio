import React, {useEffect } from 'react'
import Form from '../../molecules/Form'
import {
	Wrapper,
	Container,
	Background,
	ContactDiv,
	TitleDiv,
	ContactBox,
	ImageDiv,
	ChangeInput,
	StyledButton,
	TextArea,
	BoxDiv,
	Text,
	InputBlock,
	ButtonStyle,
} from './Contact.styles'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { scaleY } from '../../animations/animations'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const Contact = () => {
	const animationControls = useAnimation()
	const { inView, ref } = useInView({ threshold: 0 })
	useEffect(() => {
		if (inView) {
			animationControls.start('animate')
		}
	}, [animationControls, inView])
	
	return (
		<Wrapper id='contact'>
			<Container>
				<ContactDiv>
					<TitleDiv>
						<h1>Contact Me</h1>
					</TitleDiv>
					<ContactBox>
						<Form />
						<ImageDiv variants={scaleY} initial='initial' animate={animationControls} ref={ref}>
							<Image src={require('../../../assets/img/mail.png')} alt='logo' layout='responsive' objectFit='cover' />
						</ImageDiv>
					</ContactBox>
				</ContactDiv>
				<Background />
			</Container>
		</Wrapper>
	)
}

export default Contact
