import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scrollbar-width: thin;
    scrollbar-color: #2E86AB #f1f1f1;
  }
  
  html {
    scroll-behavior: smooth;
  }

  i{
    font-size: 30px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.background};
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #2E86AB;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background: #1B5299;
    }
  }
`;
