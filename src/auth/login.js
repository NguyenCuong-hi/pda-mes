import { Button, Form, Input } from "antd"
import InputType from "../components/InputType/InputType"
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from "@ant-design/icons";
import { useState } from "react";


const Login = () => {
    const [position, setPosition] = useState('end');
    return (
        <>
            <Form>
                <Form.Item>
                    <Input className='mb-11 ml-50' size="large" placeholder="User Name" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item>
                    <Input.Password placeholder="Password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </Form.Item>

                <Button type="primary" iconPosition={position}>
                    Đăng nhập
                </Button>
            </Form>
        </>

    )
};

export default Login