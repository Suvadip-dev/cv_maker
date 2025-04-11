import React, { useState } from "react";
import { Form, Input, Button, Typography, Divider } from "antd";
import styled from "styled-components";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../services/authService/authService";
import toast from "react-hot-toast";

const { Title, Text } = Typography;

interface FormValues {
  name?: string;
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const { instance } = useMsal();
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    try {
      if (isSignUp) {
        await AuthService.signup({
          name: values.name!,
          email: values.email,
          password: values.password,
        });
        toast.success("Account created successfully!");
        setIsSignUp(false); // switch to login form
      } else {
        const response = await AuthService.login({
          email: values.email,
          password: values.password,
        });
        const { token } = response.data;
  
        localStorage.setItem("token", token);
        toast.success("Logged in successfully!");
        navigate("/cv-editor");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  const handleMicrosoftLogin = () => {
    instance.loginRedirect();
  };

  return (
    <Container>
      <Card>
        <Title level={3}>{isSignUp ? "Create Account" : "Login"}</Title>

        <Form<FormValues>
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={false}
        >
          {isSignUp && (
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Full Name" autoComplete="off" />
            </Form.Item>
          )}

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Email" autoComplete="off" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Password" autoComplete="new-password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <Button type="link" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Login" : "Sign Up"}
          </Button>
        </Text>

        <Divider>OR</Divider>

        <Button
          onClick={handleMicrosoftLogin}
          block
          style={{ background: "#2F2F2F", color: "#fff" }}
        >
          Login with Microsoft
        </Button>
      </Card>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #43cea2, #185a9d);
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
`;
