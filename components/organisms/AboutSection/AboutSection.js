import React from 'react'
import { Wrapper, Container, Title, InfoContainer, TechStack,Element,IconContainer,ParagraphContainer,TechContainer,StackTitle,ImageStyle,Shape} from './AboutSection.styles'


const AboutSection = () => {
	return (
		<Wrapper>
			
			<Container>
			<Shape/>
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
                        <ImageStyle src={require('../../../assets/img/IconsAbout/js.svg')} alt='logo' width={52} height={52} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Javascript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/ts.svg')} alt='logo' width={45} height={45} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Typescript</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/node.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Node.js</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/react.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>React.js</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/next.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Next.js</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/redux.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Redux</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/framer.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Framer</p>
						</ParagraphContainer>
					</Element>
                    <Element>
						<IconContainer>
                        <ImageStyle  src={require('../../../assets/img/IconsAbout/git.svg')} alt='logo' width={50} height={50} />
                        </IconContainer>
						<ParagraphContainer>
							<p>Git</p>
						</ParagraphContainer>
					</Element>
				</TechStack>
                </TechContainer>
			</Container>
		</Wrapper>
	)
}

export default AboutSection