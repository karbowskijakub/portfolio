import React from 'react'
import { Wrapper, Container, Title, InfoContainer, TechStack,Element,IconContainer,ParagraphContainer,TechContainer,StackTitle} from './AboutSection.styles'
import Image from 'next/image'

const AboutSection = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					<h1>About Me</h1>
				</Title>
				<InfoContainer>
                
                    <p>
					tempus lectus in leo mollis ultricies. Phasellus tristique massa non faucibus feugiat. 
					tempus lectus in leo mollis ultricies. Phasellus tristique massa non faucibus feugiat. 
					tempus lectus in leo mollis ultricies. Phasellus tristique massa non faucibus feugiat. 
					tempus lectus in leo mollis ultricies. Phasellus tristique massa non faucibus feugiat. 
					tempus lectus in leo mollis ultricies. Phasellus tristique massa non faucibus feugiat. 
                    </p>
				</InfoContainer>
<TechContainer>
    <StackTitle>Tech Stack</StackTitle>
				<TechStack>
                <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <Image src={require('../../assets/img/logo-javascript.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
				</TechStack>
                </TechContainer>
			</Container>
		</Wrapper>
	)
}

export default AboutSection
