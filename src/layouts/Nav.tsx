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
`;

const NavWrap = styled.div`
  max-width: 1140px;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  gap: 40px;
  font-size: 15px;
`;

const Nav = () => {
  return (
    <Header>
      <NavWrap>
        <h1>
          <Link to="/">로고</Link>
        </h1>
        <nav>
          <Ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">상세페이지</Link>
            </li>
            <li>
              <Link to="/">몰라</Link>
            </li>
            <li>
              <Link to="/">보기3</Link>
            </li>
          </Ul>
        </nav>
      </NavWrap>
    </Header>
  );
};

export default Nav;
