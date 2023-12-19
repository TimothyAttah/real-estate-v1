import { createGlobalStyle } from 'styled-components';

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
    color: ${({ theme }) => theme.colors.colorWhite};
    background-color: ${({ theme }) => theme.colors.colorBackground};
    ${'' /* border: 2px dashed wheat; */}
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

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #cacaca;
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
  color: ${({ theme }) => theme.colors.colorWhite};
}

img {
  ${
    '' /* width: 100%;
  display: block;
  object-fit: cover; */
  }
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

.btn {
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  color: ${({ theme }) => theme.colors.colorBlack};
  padding: 1rem 2rem;
  border: 1px solid transparent;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.transitionPrimary};


  :hover {
    background: transparent;
  color: ${({ theme }) => theme.colors.colorWhite};
  border-color: ${({ theme }) => theme.colors.colorWhite};
  }
}

.window-scroll {
  background: ${({ theme }) => theme.colors.colorPrimary};
  box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
  transition: .5s;
}

.container {
  width: 80%;
  margin: 0 auto;
}

input {
   outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

img {
  ${
    '' /* width: 100%;
  object-fit: cover; */
  }

}

.toast-message {
  background: darkblue;
  color: #fff;
  font-size: 20px;
  width: 34vw;
  padding: 30px 20px;
}
`;
