// components/Header.tsx
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c2c2c;
`;

const NavLinks = styled.div`
  a {
    margin-left: 2rem;
    text-decoration: none;
    color: #1c1c1c;
    font-weight: 500;
  }
`;

const HomeHeader = () => {
  return (
    <HeaderWrapper>
      <Logo>🧑‍💼 CVBuilder</Logo>
      <NavLinks>
        <a href="#">Contact us</a>
        <a href="/login">Log in</a>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default HomeHeader;
