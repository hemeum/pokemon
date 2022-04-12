import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Header = styled.header`
  width: 100%;
  height: ${(props) => props.theme.navHeight};
  background-color: white;
  border-bottom: ${(props) => props.theme.borderColors.mainColor};
  box-shadow: 0 6px 18px rgba(180, 180, 180, 0.3);
  position: fixed;
  top: 0;
  z-index: ${(props) => props.theme.zIndexs.navZIndex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = () => {
  return (
    <Header>
      <h1>
        <Link to="/">로고</Link>
      </h1>
    </Header>
  );
};

export default Nav;
