import React from 'react'
import {Wrapper,Background,InfoContainer,Container,FirstPa,SecondPa,ThirdPa,ImgContainer,StyledHtml,StyledJs,SymbolsContainer,WaveIcon, InfoContainerMobile,HeroButton} from '../HeroContainer/HeroContainer.styles'
import {Button} from '../../atoms/Button/Button'
import Image from 'next/image'
const HeroContainer = ({isOpen,setOpen}) => {
  return (
    <Wrapper>
        <Container>
<InfoContainer>
    <FirstPa>Hello world, <WaveIcon>👋</WaveIcon> I'm </FirstPa>
    <SecondPa>Jakub Karbowski</SecondPa>
    <ThirdPa>Frontend Developer</ThirdPa>
    <HeroButton >Check my projects</HeroButton>
</InfoContainer>


<Background>

<InfoContainerMobile>
    <FirstPa>Hello world, <WaveIcon>👋</WaveIcon> I'm </FirstPa>
    <SecondPa>Jakub Karbowski</SecondPa>
    <ThirdPa>Frontend Developer</ThirdPa>
    <HeroButton className={isOpen ? "active" : null}>Check my projects</HeroButton>
</InfoContainerMobile>


<ImgContainer>
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