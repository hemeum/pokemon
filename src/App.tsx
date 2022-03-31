import Main from './pages/Main';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layouts/Nav';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'DungGeunMo';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }


  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'DungGeunMo';
  }

  button {
    cursor:pointer;
  }

  a {
    text-decoration:none;
    color:inherit;
  }

  li {
    list-style:none;
  }

  img {
    display:block;
  }
`;

const theme = {
  zIndexs: { navZIndex: 100 },
  borderColors: { mainColor: '1px solid rgba(180, 180, 180, 0.15)' },
};

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
