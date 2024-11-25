import { Col, Layout, Row } from "antd"
import { Content } from "antd/es/layout/layout"
import Title from "antd/es/typography/Title"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
const AuthLayout = () => {

    useEffect(() => {
        const root = document.getElementById('root')
        if (root) {
          root.style.height = '100%'
        }
        return () => {
          if (root) {
            root.style.height = 'auto'
          }
        }
      }, [])

    return (
      <Layout className="auth-layout" style={{ minHeight: '100vh', background: '#f7f9fc' }}>
      <Content>
          <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
              <Col xs={22} sm={16} md={12} lg={8} className="welcome-section">
                  <div className="logo" style={{ textAlign: 'center', marginBottom: 20 }}>
                      {/* <Image src={toA("/media/logos/xHRM.svg")} alt="Logo" preview={false} /> */}
                  </div>
                  <div className="welcome-header" style={{ textAlign: 'center', marginBottom: 40 }}>
                      <Title level={4}>
                          Phần mềm hỗ trợ quản lý nhân lực và dữ liệu nội bộ hàng đầu cho phòng khám/bệnh viện
                      </Title>
                  </div>
              </Col>

              <Col xs={22} sm={16} md={12} lg={24}>
                  <div className="form-container">
                      <Outlet />
                  </div>
              </Col>
          </Row>
      </Content>
  </Layout>
    )
}

export default AuthLayout
