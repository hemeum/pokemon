import Main from './pages/Main';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './layouts/Nav';
import Detail from './pages/Detail';

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
    vertical-align: bottom;
  }
`;

const theme = {
  zIndexs: { navZIndex: 100 },
  borderColors: { mainColor: '1px solid rgba(180, 180, 180, 0.15)' },
  mainColor: '#f6f8fc',
  navHeight: '80px',
};

const Wrap = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.mainColor};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
          <Wrap>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </Wrap>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
