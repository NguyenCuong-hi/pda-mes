import { Button, Col, Form, Input, Row } from "antd"
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import { useState } from "react";


const Login = () => {
    const [position, setPosition] = useState('end');

    const handleSubmit = (values) => {
        console.log('Submitted Values:', values);
    }
    return (

        <div className="login-form">
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col xs={50} sm={16} md={12} lg={20} xl={6}>
                    <Form
                        layout="vertical"
                        onFinish={handleSubmit}
                        style={{
                            padding: '20px',
                            background: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
                        >
                            <Input
                                size="large"
                                placeholder="User Name"
                                prefix={<UserOutlined />}
                                allowClear
                            />
                        </Form.Item>

                        {/* Password Input */}
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                        >
                            <Input.Password
                                size="large"
                                placeholder="Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        {/* Submit Button */}
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Đăng nhập
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>



    )
};

export default Login