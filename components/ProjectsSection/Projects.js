import React from 'react'
import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox,ImageContainer,Share,GitHub} from './Projects.styles'
import Image from 'next/image'
const Projects = () => {
	return (
		<Wrapper>
            <TitleContainer>
					<h1>Projects</h1>
				</TitleContainer>
			<Container>
				<ProjectContainer>
					<InfoBox>
						<h1>Nazwa aplikacji</h1>
						<h4>Typ aplikacji</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia augue id eros dictum commodo. Maecenas sed orci lacinia, iaculis tellus et, ultricies urna. Quisque orci sem, fringilla ut diam ac, fringilla convallis dui.</p>
						<ButtonsBox>
							<ButtonsDiv>
								<FirstButton>Live<Share/></FirstButton>
								<SecondButton>Code<GitHub/></SecondButton>
							</ButtonsDiv>
                            <TechnologyDiv>
                                <span>Next.js</span>
                                <span>Framer</span>
                                <span>styled-components</span>
                            </TechnologyDiv>
						</ButtonsBox>
					</InfoBox>
					<ImageBox>
                        <ImageContainer>
                    <Image src={require('../../assets/img/waiter.jpg')} alt='logo' width={550} height={352}  />
                    </ImageContainer>
                    </ImageBox>
				</ProjectContainer>
			</Container>
            <Container>
				<ProjectContainer>
					<InfoBox>
						<h1>Nazwa aplikacji</h1>
						<h4>Typ aplikacji</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia augue id eros dictum commodo. Maecenas sed orci lacinia, iaculis tellus et, ultricies urna. Quisque orci sem, fringilla ut diam ac, fringilla convallis dui.</p>
						<ButtonsBox>
							<ButtonsDiv>
								<FirstButton>Live</FirstButton>
								<SecondButton>Code</SecondButton>
							</ButtonsDiv>
                            <TechnologyDiv>
                                <span>Next.js</span>
                                <span>Framer</span>
                                <span>styled-components</span>
                            </TechnologyDiv>
						</ButtonsBox>
					</InfoBox>
					<ImageBox>
                        <ImageContainer>
                    <Image src={require('../../assets/img/waiter.jpg')} alt='logo' width={550} height={352}  />
                    </ImageContainer>
                    </ImageBox>
				</ProjectContainer>
			</Container>
		</Wrapper>
	)
}

export default Projects
