import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  &::-webkit-scrollbar {
    width: 4px;
    height: 5px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }
  box-sizing: border-box;
}
body {
  background-color: #ffffff;
  margin: 0;
  /* font-family: "AppleSDGothicNeo"; */
}
ul{
  background-color: white;
}
button{
  outline: none;
  border: none;
  background-color: transparent;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
  padding: 0;
}


details > summary::-webkit-details-marker {
  display: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  vertical-align: middle;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

textarea {
  border-width: 0px;
 
}
input {
  outline:none;
  
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none;
  color: black;
}

.container {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width:551px) {
  &::-webkit-scrollbar {
    display: none;
  }
}`;
