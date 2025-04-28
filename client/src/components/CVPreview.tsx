import React from 'react';
import styled, { keyframes } from 'styled-components';

const CVPreview: React.FC = () => {
  return (
    <PreviewContainer>
      <TemplatePreview>
        <Header>
          <NameSection>
            <NameHeading>JOHN SMITH</NameHeading>
            <TitleText>Marketing Specialist</TitleText>
          </NameSection>
          <ContactSection>
            <ContactItem>johnsmith@email.com</ContactItem>
            <ContactItem>+44 7700 900000</ContactItem>
            <ContactItem>London, UK</ContactItem>
          </ContactSection>
        </Header>
        
        <SectionBlock>
          <SectionHeading>PROFILE</SectionHeading>
          <TextLine />
          <TextLine width="95%" />
          <TextLine width="90%" />
        </SectionBlock>
        
        <SectionBlock>
          <SectionHeading>EXPERIENCE</SectionHeading>
          <ExperienceBlock>
            <ExperienceHeader>
              <JobHeading>Marketing Manager</JobHeading>
              <DateText>2019 - Present</DateText>
            </ExperienceHeader>
            <CompanyText>ABC Company Ltd.</CompanyText>
            <TextLine width="95%" />
            <TextLine width="90%" />
            <TextLine width="93%" />
          </ExperienceBlock>
          
          <ExperienceBlock>
            <ExperienceHeader>
              <JobHeading>Marketing Specialist</JobHeading>
              <DateText>2016 - 2019</DateText>
            </ExperienceHeader>
            <CompanyText>XYZ Corporation</CompanyText>
            <TextLine width="95%" />
            <TextLine width="90%" />
          </ExperienceBlock>
        </SectionBlock>
        
        <SectionBlock>
          <SectionHeading>EDUCATION</SectionHeading>
          <ExperienceBlock>
            <ExperienceHeader>
              <JobHeading>BA Marketing</JobHeading>
              <DateText>2013 - 2016</DateText>
            </ExperienceHeader>
            <CompanyText>University of London</CompanyText>
          </ExperienceBlock>
        </SectionBlock>
        
        <SectionBlock>
          <SectionHeading>SKILLS</SectionHeading>
          <SkillsContainer>
            <SkillTag>Digital Marketing</SkillTag>
            <SkillTag>Content Strategy</SkillTag>
            <SkillTag>SEO</SkillTag>
            <SkillTag>Social Media</SkillTag>
            <SkillTag>Analytics</SkillTag>
          </SkillsContainer>
        </SectionBlock>
      </TemplatePreview>
    </PreviewContainer>
  );
};

export default CVPreview;

const PreviewContainer = styled.div`
  position: relative;
  height: 420px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const float = keyframes`
  0% {
    transform: translateY(0px) rotateY(10deg);
  }
  50% {
    transform: translateY(-10px) rotateY(7deg);
  }
  100% {
    transform: translateY(0px) rotateY(10deg);
  }
`;

const TemplatePreview = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 25px;
  overflow: hidden;
  transform: rotateY(10deg);
  transform-style: preserve-3d;
  transition: transform 0.3s;
  animation: ${float} 6s ease-in-out infinite;
  
  &:hover {
    animation-play-state: paused;
    transform: rotateY(0deg);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NameSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  color: #0078d4;
  margin-bottom: 5px;
`;

const TitleText = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.7rem;
`;

const ContactItem = styled.p`
  margin-bottom: 3px;
  color: #555;
`;

const SectionBlock = styled.div`
  margin-bottom: 15px;
`;

const SectionHeading = styled.h3`
  font-size: 0.8rem;
  color: #0078d4;
  margin-bottom: 5px;
  font-weight: bold;
`;

const ExperienceBlock = styled.div`
  margin-bottom: 10px;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobHeading = styled.h4`
  font-size: 0.75rem;
  color: #333;
  font-weight: bold;
`;

const DateText = styled.span`
  font-size: 0.7rem;
  color: #777;
`;

const CompanyText = styled.p`
  font-size: 0.7rem;
  color: #555;
  margin-bottom: 5px;
`;

const TextLine = styled.div<{ width?: string }>`
  height: 4px;
  background-color: #f0f0f0;
  width: ${props => props.width || '100%'};
  margin-bottom: 5px;
  border-radius: 2px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const SkillTag = styled.div`
  background-color: #f0f7ff;
  color: #0078d4;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.65rem;
`; 