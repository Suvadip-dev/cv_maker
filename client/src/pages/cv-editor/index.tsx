import React, { useState } from "react";
import { Button, Form, Input, Space, Typography, Divider, Select, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const CvEditor: React.FC = () => {
  const [form] = Form.useForm();
  const [customSections, setCustomSections] = useState<string[]>([]);

  const addCustomSection = () => {
    const newSectionName = prompt("Enter custom section name:");
    if (newSectionName) {
      setCustomSections([...customSections, newSectionName]);
    }
  };

  const onFinish = (values: any) => {
    console.log("CV Submitted:", values);
  };

  return (
    <Card style={{ margin: "2rem" }}>
      <Title level={2}>CV Editor</Title>
      <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
        {/* 🧍 Personal Info */}
        <Title level={4}>Personal Information</Title>
        <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Address">
          <Input />
        </Form.Item>
        <Form.Item name="linkedin" label="LinkedIn">
          <Input />
        </Form.Item>
        <Form.Item name="github" label="GitHub">
          <Input />
        </Form.Item>
        <Form.Item name="summary" label="Profile Summary">
          <TextArea rows={4} />
        </Form.Item>

        <Divider />

        {/* 🎓 Education */}
        <Title level={4}>Education</Title>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...rest }) => (
                <Space key={key} direction="vertical" style={{ width: "100%" }}>
                  <Form.Item name={[name, "degree"]} label="Degree" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "university"]} label="University" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "year"]} label="Year" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "description"]} label="Description">
                    <TextArea rows={2} />
                  </Form.Item>
                  <Button icon={<MinusCircleOutlined />} onClick={() => remove(name)} danger>
                    Remove Education
                  </Button>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider />

        {/* 💼 Work Experience */}
        <Title level={4}>Work Experience</Title>
        <Form.List name="experience">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }) => (
                <Space key={key} direction="vertical" style={{ width: "100%" }}>
                  <Form.Item name={[name, "title"]} label="Job Title" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "company"]} label="Company" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "duration"]} label="Duration" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "responsibilities"]} label="Responsibilities">
                    <TextArea rows={3} />
                  </Form.Item>
                  <Button icon={<MinusCircleOutlined />} onClick={() => remove(name)} danger>
                    Remove Experience
                  </Button>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider />

        {/* 🛠 Skills */}
        <Title level={4}>Skills</Title>
        <Form.Item name="skills">
          <Select mode="tags" style={{ width: "100%" }} placeholder="Enter skills" />
        </Form.Item>

        <Divider />

        {/* 🏆 Projects */}
        <Title level={4}>Projects</Title>
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }) => (
                <Space key={key} direction="vertical" style={{ width: "100%" }}>
                  <Form.Item name={[name, "title"]} label="Project Title" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[name, "description"]} label="Description">
                    <TextArea rows={3} />
                  </Form.Item>
                  <Form.Item name={[name, "link"]} label="Project Link">
                    <Input />
                  </Form.Item>
                  <Button icon={<MinusCircleOutlined />} onClick={() => remove(name)} danger>
                    Remove Project
                  </Button>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider />

        {/* ➕ Add Custom Sections */}
        <Title level={5}>Custom Sections</Title>
        {customSections.map((section) => (
          <Form.Item key={section} name={section} label={section}>
            <TextArea rows={3} />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={addCustomSection} icon={<PlusOutlined />}>
            Add Custom Section
          </Button>
        </Form.Item>

        <Divider />

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit CV
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CvEditor;
