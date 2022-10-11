import React from 'react'
import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox,ImageContainer,Share,GitHub} from './Projects.styles'
import Image from 'next/image'
import Link from 'next/link'
const Projects = () => {
	return (
		<Wrapper>
            <TitleContainer>
					<h1>Projects</h1>
				</TitleContainer>
			<Container>
				<ProjectContainer>
					<InfoBox>
						<h1>Breaking Bad Api</h1>
						<h4>character finder</h4>
						<p>This project is created with React framework and Breaking Bad Api. Breaking Bad responsive application allows you to search for information about the characters from the Breaking Bad series.</p>
						<ButtonsBox>
							<ButtonsDiv>
								<Link 
								href='https://karbowskijakub.github.io/breaking-bad-api/'>
								<FirstButton>Live<Share/></FirstButton></Link>
								<Link 
								href='https://github.com/karbowskijakub/breaking-bad-api'>
								<SecondButton>Code<GitHub/></SecondButton></Link>
							</ButtonsDiv>
                            <TechnologyDiv>
                                <span>React.js</span>
                                <span>styled-components</span>
                            </TechnologyDiv>
						</ButtonsBox>
					</InfoBox>
					<ImageBox>
                        <ImageContainer>
                    <Image src={require('../../../assets/img/breakingbad.png')} alt='logo' width={900} height={616}  
					/>
                    </ImageContainer>
                    </ImageBox>
				</ProjectContainer>
			</Container>
			<Container>
				<ProjectContainer>
				<ImageBox>
                        <ImageContainer>
                    <Image src={require('../../../assets/img/foodzy.png')} alt='logo' width={900} height={616}  />
                    </ImageContainer>
                    </ImageBox>
					<InfoBox>
						<h1>Foodzy Landing Page</h1>
						<h4>landing page</h4>
						<p>This project was created to check my UI skills and to get practice with the new Next.js technology.</p>
						<ButtonsBox>
							<ButtonsDiv>
							<Link 
								href='https://foodzy-landing-page.vercel.app/'>
								<FirstButton>Live<Share/></FirstButton></Link>
								<Link 
								href='https://github.com/karbowskijakub/foodzy-landing-page'>
								<SecondButton>Code<GitHub/></SecondButton></Link>
							</ButtonsDiv>
                            <TechnologyDiv>
                                <span>Next.js</span>
                                <span>Framer</span>
                                <span>styled-components</span>
                            </TechnologyDiv>
						</ButtonsBox>
					</InfoBox>
					
				</ProjectContainer>
			</Container>
			<Container>
				<ProjectContainer>
					<InfoBox>
						<h1>SpaceX clone</h1>
						<h4>multi-page website</h4>
						<p>This project is created with HTML, CSS & JS. While working on it, I tested my skills mainly with css.</p>
						<ButtonsBox>
							<ButtonsDiv>
							<Link 
								href='https://karbowskijakub.github.io/spacex-website-clone/'>
								<FirstButton>Live<Share/></FirstButton></Link>
								<Link 
								href='https://github.com/karbowskijakub/spacex-website-clone'>
								<SecondButton>Code<GitHub/></SecondButton></Link>
							</ButtonsDiv>
                            <TechnologyDiv>
                                <span>SCSS</span>
                                <span>HTML</span>
                                <span>Javascript</span>
                            </TechnologyDiv>
						</ButtonsBox>
					</InfoBox>
					<ImageBox>
                        <ImageContainer>
                    <Image src={require('../../../assets/img/spacex.png')} alt='logo' width={900} height={616}  />
                    </ImageContainer>
                    </ImageBox>
				</ProjectContainer>
			</Container>
		</Wrapper>
	)
}

export default Projects
