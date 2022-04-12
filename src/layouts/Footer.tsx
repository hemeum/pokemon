import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Foot = styled.footer`
  width: 100%;
  height: ${(props) => props.theme.footHeihgt};
  background-color: white;
  border-bottom: ${(props) => props.theme.borderColors.mainColor};
  box-shadow: 0 6px 18px rgba(180, 180, 180, 0.3);
  position: fixed;
  bottom: 0;
  z-index: ${(props) => props.theme.zIndexs.navZIndex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  gap: 100px;
  font-size: 22px;
`;

const Footer = () => {
  return (
    <Foot>
      <nav>
        <Ul>
          <li>
            <Link
              to="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'blue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'blue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              목록으로
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'blue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              My Pokemos
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'blue';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'black';
              }}
            >
              ㅇㅅㅇ
            </Link>
          </li>
        </Ul>
      </nav>
    </Foot>
  );
};

export default Footer;
