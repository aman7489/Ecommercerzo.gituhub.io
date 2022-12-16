import styled from "styled-components";

export const Button = styled.button `
text-decoration:none;
max-width:auto;
background-color:rgba(23, 11, 97, 0.9);
color:rgb(255,255,255);
padding:1.4rem 2.4rem;
border:none;
text-transform:uppercase;
text-algn:center;
cursor:pointer;
transition:all 0.3s ease 0s;
margin:1rem 1.5rem;


&:hover,
&:active{
box-shadow: 0 2rem 2rem 0 rgb(132,144,,255 / 30%);
box-shadow:${({theme}) => theme.colors.shadowSupport};
}
`
