import styled from "styled-components";

export const Button = styled.button` 
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px; 
color: ${props => props.theme.secondaryColor};
border: 2px solid ${props => props.theme.secondaryColor};
`;

export const Title = styled.h1` 
font-size: 1.3em; 
color: ${props => props.theme.primaryColor}; 
`;


export const SubTitle = styled.h2` 
font-size: .9em; 
color: ${props => props.theme.secondaryColor}; 
`;

export const Price = styled.span` 
font-size: 1.3em; 
text-aling:right
color: ${props => props.theme.primaryColor}; 
`;

export const Bar = styled.header` 
background-color: #484848;
height: 80px;
width: 100%;
padding: 10px; 
z-index:2000;
position:sticky;
top:0;
display: flex;
 
`;

 
