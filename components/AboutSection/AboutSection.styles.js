import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;
height:700px;
`
export const Container = styled.div`
height:80%;
width:1200px;
display: grid;
grid-template-row:  1fr 3fr;
grid-template-column:  1fr 1fr;
`
export const Title =styled.div`
grid-row: 1/1;
grid-column: 1/3;
display:flex;
justify-content:center;
align-items:center;

`
export const TechStack =styled.div`
min-width:100%;
height:100%;
grid-row: 2/3;
grid-column: 2/2;
display: grid;
gap:25px;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);


`
export const InfoContainer =styled.div`
grid-row: 2/3;
grid-column: 1/2;
height:100%;
max-width:600px;
display:flex;
align-items:center;
font-size:  ${({ theme }) => theme.fontSize.l};

`

export const Element =styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const IconContainer =styled.div`
background-color:red;
height:60%;
width:80%;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;


`
export const ParagraphContainer =styled.div`
height:40%;
display:flex;
align-items:center;
`
export const TechContainer =styled.div`
min-width:600px;
`
export const StackTitle = styled.h3
`
text-align:center;
font-size:  ${({ theme }) => theme.fontSize.xl};
`

