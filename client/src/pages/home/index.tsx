// src/pages/home/index.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../home-header";
import { Button, Row, Col, Typography, Card, Carousel } from "antd";
import CVPreview from "../../components/CVPreview";
import Footer from "../../components/Footer";

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateCV = () => {
    navigate("/cv-editor"); // will redirect to login if not authenticated
  };

  const handleCreateCVWithAI = () => {
    navigate("/cv-editor?mode=ai"); // will redirect to login if not authenticated
  };

  const testimonials = [
    { id: 1, name: "Sarah J.", role: "Marketing Executive", text: "This CV builder helped me land my dream job! The templates are professional and easy to customize." },
    { id: 2, name: "Michael T.", role: "Software Developer", text: "I received multiple interview calls after creating my CV here. The AI suggestions were incredibly helpful." },
    { id: 3, name: "Emma P.", role: "Healthcare Professional", text: "As someone who struggled with writing, the AI assistance made creating a professional CV so simple." },
  ];

  return (
    <Container>
      <HomeHeader />
      
      <HeroSection>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <HeroContent>
              <Title level={1}>Create a Professional CV in Minutes</Title>
              <Paragraph>
                Our AI-powered CV builder helps you craft the perfect CV tailored to your industry. 
                Stand out from the crowd and land your dream job faster.
              </Paragraph>
              <ButtonGroup>
                <CTAButton type="primary" size="large" onClick={handleCreateCV}>
                  Create Your CV
                </CTAButton>
                <CTAButtonAI type="default" size="large" onClick={handleCreateCVWithAI}>
                  Create Your CV with AI
                </CTAButtonAI>
              </ButtonGroup>
              <Paragraph style={{ marginTop: "1rem", fontSize: "14px" }}>
                Join over 10,000 professionals who have accelerated their job search
              </Paragraph>
            </HeroContent>
          </Col>
          <Col xs={24} md={12}>
            <CVPreview />
          </Col>
        </Row>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle level={2}>How Our CV Builder Works</SectionTitle>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <FeatureCard>
              <FeatureIcon>1</FeatureIcon>
              <Title level={4}>Choose a Template</Title>
              <Paragraph>
                Select from our professionally designed CV templates that employers love.
              </Paragraph>
            </FeatureCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <FeatureCard>
              <FeatureIcon>2</FeatureIcon>
              <Title level={4}>Add Your Details</Title>
              <Paragraph>
                Fill in your information with helpful guidance and AI suggestions along the way.
              </Paragraph>
            </FeatureCard>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <FeatureCard>
              <FeatureIcon>3</FeatureIcon>
              <Title level={4}>Download & Share</Title>
              <Paragraph>
                Export your finished CV as a PDF, share it online, or print it for your interviews.
              </Paragraph>
            </FeatureCard>
          </Col>
        </Row>
      </FeaturesSection>

      <TestimonialsSection>
        <SectionTitle level={2}>Success Stories from Our Users</SectionTitle>
        <Carousel autoplay>
          {testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <TestimonialCard>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <strong>{testimonial.name}</strong> — {testimonial.role}
                </TestimonialAuthor>
              </TestimonialCard>
            </div>
          ))}
        </Carousel>
      </TestimonialsSection>

      <CTASection>
        <Title level={2}>Ready to Create Your Professional CV?</Title>
        <Paragraph>
          Join thousands of job seekers who have successfully landed interviews using our CV builder.
        </Paragraph>
        <ButtonGroup>
          <CTAButton type="primary" size="large" onClick={handleCreateCV}>
            Create Your CV
          </CTAButton>
          <CTAButtonAI type="default" size="large" onClick={handleCreateCVWithAI}>
            Create Your CV with AI
          </CTAButtonAI>
        </ButtonGroup>
      </CTASection>
      
      <Footer />
    </Container>
  );
};

export default HomePage;

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0078d4, #004c87);
  color: white;
  padding: 5rem 2rem;
`;

const HeroContent = styled.div`
  h1 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const ImagePlaceholder = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CTAButton = styled(Button)`
  background-color: #ff6b00;
  border-color: #ff6b00;
  font-weight: bold;
  height: auto;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  
  &:hover {
    background-color: #e86000;
    border-color: #e86000;
  }
`;

const CTAButtonAI = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
  color: #ffffff;
  font-weight: bold;
  height: auto;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    color: #ffffff;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f5f8fa;
`;

const SectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 3rem !important;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  text-align: center;
`;

const FeatureIcon = styled.div`
  background-color: #0078d4;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background-color: white;
`;

const TestimonialCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: #555;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
`;

const CTASection = styled.section`
  background-color: #0078d4;
  color: white;
  padding: 5rem 2rem;
  text-align: center;
  
  h2 {
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.2rem;
  }
`;
