import styled from 'styled-components'
import {Button} from '../Button/Button'
import breakpoints from '../../breakpoints/breakpoints'

export const TextEffect = styled.span`
color:${({ theme }) => theme.colors.blue};
`

export const ButtonText = styled(Button)`
font-size: ${({ theme }) => theme.fontSize.m};
margin-bottom:3em;
@media only screen and ${breakpoints.device.xss} {
    font-size: ${({ theme }) => theme.fontSize.lg};
}
`