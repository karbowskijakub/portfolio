import React from 'react'
import {Wrapper,Background,InfoContainer,Container,FirstPa,SecondPa,ThirdPa,ImgContainer,StyledHtml,StyledJs,SymbolsContainer,WaveIcon, InfoContainerMobile,MobileSymbol,StyledHtmlMobile, ImgContainerMobile} from '../HeroContainer/HeroContainer.styles'
import {Button,HeroButton} from '../../atoms/Button/Button'
import Image from 'next/image'
import {slideLeft,slideRight,scaleY,scaleUpDown} from '../../animations/animations'
import {breaking} from '../../../assets/img/breakingbad.png'


const HeroContainer = ({isOpen,setOpen}) => {
  return (
    <Wrapper>
        <Container>

<InfoContainer 
 variants={slideLeft}
 custom={{ delay: 0.5 }}
 initial='initial'
 animate='animate'
>
    <FirstPa>Hello world, <WaveIcon>👋</WaveIcon> I'm </FirstPa>
    <SecondPa
    variants={scaleY}
    custom={1}
    initial='initial'
    animate='animate'
   
    >Jakub Karbowski</SecondPa>
    <ThirdPa>Frontend Developer</ThirdPa>
    <HeroButton 
    variants={scaleUpDown}
    initial='initial'
    animate='animate'
    custom={1.5}>Check my projects</HeroButton>
</InfoContainer>

<Background>

<InfoContainerMobile
 variants={slideLeft}
 custom={{ delay: 0.5 }}
 initial='initial'
 animate='animate'
>
    <FirstPa>Hello world, <WaveIcon>👋</WaveIcon> I'm </FirstPa>
    <SecondPa
     variants={scaleY}
     initial='initial'
     animate='animate'
     custom={1}
     >Jakub Karbowski</SecondPa>
    <ThirdPa>Frontend Developer</ThirdPa>
    <HeroButton
variants={scaleUpDown}
initial='initial'
animate='animate'
custom={1.5}

     className={isOpen ? "active" : null}>Check my projects</HeroButton>
</InfoContainerMobile>

<ImgContainerMobile 
variants={slideRight}
custom={{ delay: 0.6 }}
initial='initial'
animate='animate' >

<Image src={require('../../../assets/img/person-image.png')} alt='logo'  objectFit="cover" />

</ImgContainerMobile>

<ImgContainer 
variants={slideRight}
custom={{ delay: 0.6 }}
initial='initial'
animate='animate' >

<Image src={require('../../../assets/img/person-image.png')} alt='logo' width={500} height={512}  />


<SymbolsContainer>
<StyledHtml src={require('../../../assets/img/html-1.svg')} alt='logo' width={150} height={200} />
<Image src={require('../../../assets/img/css-3.svg')} alt='logo' width={50} height={60} />
<StyledJs src={require('../../../assets/img/javascript-1.svg')} alt='logo' width={40} height={200} />
</SymbolsContainer>
</ImgContainer>
</Background>

</Container>
    </Wrapper>
 
  )
}

export default HeroContainer