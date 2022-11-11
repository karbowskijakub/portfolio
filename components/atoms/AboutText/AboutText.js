import React from 'react'
import {TextEffect,ButtonText} from './AboutText.styles'
import Link from 'next/link'

const AboutText = () => {
	return (
		<>
			<p>
				I’m a self-taught <TextEffect>frontend developer</TextEffect> from Poland.
			</p>
			<p>
				I started my programming journey in June 2021 and it quickly turned into my hobby which I do in my spare time. I
				am constantly learning <TextEffect>new technologies</TextEffect> which I later use in my latest projects. I
				always aim to make my projects <TextEffect>transparent</TextEffect> and <TextEffect>convenient</TextEffect> for
				the user. I'm learning new things all the time, and if I don't know something, I'm the type of person who will
				do anything to find the answer.
			</p>
			<p>
				I mainly work with the <TextEffect>React framework</TextEffect> because it has many libraries and gives me much
				freedom in projects.
			</p>
			<p>
				I’m currently looking for a <TextEffect>job</TextEffect> or <TextEffect>internship</TextEffect>.
			</p>
            <Link href='#contact'>
            <ButtonText>Contact Me</ButtonText>
            </Link>
		</>
	)
}

export default AboutText
