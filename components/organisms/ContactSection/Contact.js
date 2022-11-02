import React, { useState } from 'react'
import Form from '../../molecules/Form'
import { Wrapper, Container, Background, ContactDiv, TitleDiv, ContactBox, ImageDiv,ChangeInput ,StyledButton,TextArea,BoxDiv,Text,InputBlock,ButtonStyle} from './Contact.styles'
import Image from 'next/image'
import {useForm} from "react-hook-form";



const Contact = () => {

	return (
		<Wrapper>
			<Container>
				<ContactDiv>
					<TitleDiv>
						<h1>Contact Me</h1>
					</TitleDiv>
					<ContactBox>
		<Form/>
						<ImageDiv>
                        <Image src={require('../../../assets/img/mail.png')} alt='logo' layout="responsive" objectFit="cover" />
                        </ImageDiv>
					</ContactBox>
				</ContactDiv>
				<Background />
			</Container>
		</Wrapper>
	)
}

export default Contact


