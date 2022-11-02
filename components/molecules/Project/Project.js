import React from 'react'
import { Wrapper, Container, TitleContainer,ProjectContainer,InfoBox,ButtonsBox,ButtonsDiv,FirstButton,SecondButton,TechnologyDiv,ImageBox,ImageContainer,Share,GitHub} from './Project.styles'
import Image from 'next/image'
import Link from 'next/link'
import {slideLeft,slideRight,ScaleY} from '../../animations/animations';
import { useInView } from 'react-intersection-observer';
import {  useAnimation } from 'framer-motion'
import {List} from '../../atoms/List'

const Project = () => {

    
        const [ref, inView ] = useInView({ threshold: 0.5 })

        const animationControls = useAnimation()

    	if (inView) {
            animationControls.start('animate')
          }

          const imageAnimate={
            offscreen:{x:-100},
            onscreen:{x:0, rotate:[0,20,-20,90,0]},
            transition: {duration:5}
          }

	return List.map((item,index) => ( 
        <Container 
        key={index}
        ref={ref}
        variants={slideLeft }
      initial='initial'
      custom={{ duration: 1.1 }}
      animate={animationControls}
        
        >
				<ProjectContainer >
					<InfoBox >
						<h1>{item.h1}</h1>
						<h4>{item.h4}</h4>
						<p>{item.p}</p>
						<ButtonsBox>
							<ButtonsDiv>
								<Link href='https://karbowskijakub.github.io/breaking-bad-api/' >
								<FirstButton>Live<Share/></FirstButton></Link>
								<Link href='https://github.com/karbowskijakub/breaking-bad-api' >
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
                    <Image src={`https://i.imgur.com/${item.image}.png`} alt='logo'   width={750} height={500} 
					/>
                    </ImageContainer>
                    </ImageBox>
				</ProjectContainer>
                </Container>
		));
    }

export default Project
