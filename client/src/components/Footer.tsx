import React from 'react';
import styled from 'styled-components';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Row gutter={[32, 24]}>
        <Col xs={24} sm={12} md={6}>
          <FooterTitle level={5}>CV Maker Pro</FooterTitle>
          <FooterText>
            Create professional CVs with AI assistance. Stand out from the crowd and land your dream job faster.
          </FooterText>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <FooterTitle level={5}>Resources</FooterTitle>
          <LinkList>
            <li><FooterLink href="#">CV Examples</FooterLink></li>
            <li><FooterLink href="#">Cover Letter Examples</FooterLink></li>
            <li><FooterLink href="#">CV Writing Tips</FooterLink></li>
            <li><FooterLink href="#">Career Blog</FooterLink></li>
          </LinkList>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <FooterTitle level={5}>Company</FooterTitle>
          <LinkList>
            <li><FooterLink href="#">About Us</FooterLink></li>
            <li><FooterLink href="#">Pricing</FooterLink></li>
            <li><FooterLink href="#">Contact Us</FooterLink></li>
            <li><FooterLink href="#">Careers</FooterLink></li>
          </LinkList>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <FooterTitle level={5}>Legal</FooterTitle>
          <LinkList>
            <li><FooterLink href="#">Terms of Service</FooterLink></li>
            <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            <li><FooterLink href="#">Cookie Policy</FooterLink></li>
            <li><FooterLink href="#">Accessibility</FooterLink></li>
          </LinkList>
        </Col>
      </Row>
      
      <FooterDivider />
      
      <CopyrightRow>
        <CopyrightText>
          © {new Date().getFullYear()} CV Maker Pro. All rights reserved.
        </CopyrightText>
        <SocialLinks>
          <SocialLink href="#">LinkedIn</SocialLink>
          <SocialLink href="#">Twitter</SocialLink>
          <SocialLink href="#">Facebook</SocialLink>
        </SocialLinks>
      </CopyrightRow>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #f5f8fa;
  padding: 4rem 2rem 2rem;
  color: #555;
`;

const FooterTitle = styled(Title)`
  color: #333 !important;
  margin-bottom: 1.2rem !important;
`;

const FooterText = styled(Paragraph)`
  color: #666;
  font-size: 0.9rem;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.8rem;
  }
`;

const FooterLink = styled(Link)`
  color: #666 !important;
  font-size: 0.9rem;
  transition: color 0.2s;
  
  &:hover {
    color: #0078d4 !important;
  }
`;

const FooterDivider = styled(Divider)`
  margin: 2rem 0 1.5rem;
  border-color: rgba(0, 0, 0, 0.1);
`;

const CopyrightRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CopyrightText = styled(Text)`
  color: #888;
  font-size: 0.85rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled(Link)`
  color: #888 !important;
  font-size: 0.85rem;
  
  &:hover {
    color: #0078d4 !important;
  }
`; 