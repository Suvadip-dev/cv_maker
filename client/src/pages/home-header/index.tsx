// components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const resourcesMenu = (
    <Menu>
      <Menu.Item key="1">CV Examples</Menu.Item>
      <Menu.Item key="2">Cover Letter Examples</Menu.Item>
      <Menu.Item key="3">CV Writing Tips</Menu.Item>
      <Menu.Item key="4">Career Blog</Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage>📄</LogoImage>
          <Logo>CV Maker Pro</Logo>
        </LogoContainer>
        
        <NavMenu>
          <NavItem>
            <Dropdown overlay={resourcesMenu}>
              <a onClick={e => e.preventDefault()}>
                Resources <DownOutlined />
              </a>
            </Dropdown>
          </NavItem>
          <NavItem>
            <a href="#pricing">Pricing</a>
          </NavItem>
          <NavItem>
            <a href="#about">About</a>
          </NavItem>
          <NavItem>
            <a href="#contact">Contact Us</a>
          </NavItem>
          <NavItem>
            <LoginLink onClick={handleLogin}>
              Log In
            </LoginLink>
          </NavItem>
        </NavMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default HomeHeader;

const HeaderWrapper = styled.header`
  background-color: #0078d4;
  position: relative;
  z-index: 100;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.div`
  font-size: 2rem;
  line-height: 1;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`;

const NavMenu = styled.div`
  display: flex;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    opacity: 0.9;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
`;

const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  opacity: 0.9;
  transition: opacity 0.2s;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;
