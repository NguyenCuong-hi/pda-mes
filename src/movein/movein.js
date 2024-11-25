import { Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import * as XLSX from "xlsx";

const MoveIn = () => {

    const handleSubmit = {

    }

    const handleDownload = async() =>  {
        // const res = await downloadFile();

        try {
            const response = await fetch("https://api.data.gov.in/resource/8d3b6596-b09e-4077-aebf-425193185a5b?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=csv");
            const blob = await response.blob();
            

            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });

                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const html = XLSX.utils.sheet_to_html(sheet);

                const iframe = document.createElement("iframe");
                iframe.style.display = "none";
                document.body.appendChild(iframe);
        
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(html);
                iframeDoc.close();
        
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
        
                setTimeout(() => document.body.removeChild(iframe), 1000);
            };
            reader.readAsArrayBuffer(blob);
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    }
    return (
        <div className="form-movein">
            <Row justify='center' align='top' style={{ minHeight: '100vh', }}>
                <Col xs={22} md={16} lg={12} xl={8}>
                    <Form layout="vetical" onFinish={handleSubmit}
                    >
                        <Form.Item
                            name='operation'
                            rules={[{ required: true, message: 'Không được để trống !' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Operation"
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item
                            name='operation'
                            rules={[{ required: true, message: 'Không được để trống !' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Operation"
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item
                            name='operation'
                            rules={[{ required: true, message: 'Không được để trống !' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Operation"
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item
                            name='operation'
                            rules={[{ required: true, message: 'Không được để trống !' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Operation"
                                allowClear
                            />
                        </Form.Item>
                        <Form.Item
                            name='operation'
                            rules={[{ required: true, message: 'Không được để trống !' }]}
                        >
                            <Input
                                size="large"
                                placeholder="Operation"
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                            >
                                Excute
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                onClick={handleDownload}
                            >
                                Download File
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default MoveIn;