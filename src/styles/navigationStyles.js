// Styled component import
import styled from 'styled-components';
// React router import
import { Link } from 'react-router-dom';

export const MainNavigation = styled.div`
  background: #d6d6d6;
  width: 241px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  z-index: 10000;
`;

export const NavTitle = styled.h1`
  font-size: 4rem;
  padding-left: 17px;
  font-weight: bold;
  color: #4b4a4b;
  margin: 20px 0;
`;

export const NavLink = styled(Link)`
  width: 208px;
  margin: 0 auto;
  margin-bottom: 20px;
  text-decoration: none;
  color: #4b4a4b;
`;

export const NavButton = styled.button`
  border: none;
  border: 1px solid #c1c6c7;
  width: 100%;
  margin: 0 auto;
  background: #00bec2;
  color: #fff;
  font-weight: bold;
  padding: 16px 0;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s linear;
  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.97);
  }
`;
