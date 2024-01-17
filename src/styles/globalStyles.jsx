import { createGlobalStyle } from 'styled-components';
import { theme } from '../themes';

export const GlobalStyle = createGlobalStyle`
  * {

     margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${'' /* scroll-padding-top:1rem; */}
    scroll-behavior: smooth;
    outline: 0;
    border:0;
    text-decoration: none;
    list-style: none;
  }

  body {
    max-width: 1500px;
    width: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    line-height: 1.7;
    background: ${theme.color.bodyBgColor};
    margin: 0 auto;

  }

  html,
  body {
    overflow-x: hidden;
    overflow-y: scroll;
    ::-webkit-scrollbar{
      display: none;
    }
  }

  ${
    '' /* ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #cacaca;
  } */
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.3rem;
  }


ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
  color:${theme.color.textLight};
}



button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
   outline: none;
  border: none;
  :focus {
    outline: none;
  }
}

img {
  width: 100%;
 object-fit: cover;
 vertical-align: middle;

}

.toast-message {
  background: darkblue;
  color: #fff;
  font-size: 20px;
  width: 34vw;
  padding: 30px 20px;
}
`;
