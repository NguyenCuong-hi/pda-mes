import { BackwardFilled, BackwardOutlined } from "@ant-design/icons";
import { BackTop, Button, Col, Layout, Row, Tooltip } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Layout className="layout-antd" style={{ minHeight: '100vh', background: '#f7f9fc' }} >
                <Row justify='start' align='top' style={{ minHeight: '100vh' }}>
                    <Col xs={22} sm={16} md={12} lg={24} className="bar">
                        <Tooltip title="Back">
                            <Button title="Back" type='primary' icon={<BackwardOutlined />} style={{ minWidth: '10vw', minHeight: '5vh' }} > Back </Button>
                        </Tooltip>
                    </Col>

                    <Col xs={22} sm={16} md={12} lg={24}>
                        <div className="form-container">
                            <Outlet />
                        </div>
                    </Col>
                </Row>
            </Layout>

        </div>
    )
}

export default MainLayout;