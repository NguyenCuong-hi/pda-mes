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
        <div className='flex-column flex-middle h-100 authLayout'>
            <div className='wellcome-site flex-column flex-middle'>
                <div className="logo">
                    {/* <Image src={toA("/media/logos/xHRM.svg")} /> */}
                </div>
                <div className="wellcome-header">
                    <h4>Phần mềm hỗ trợ quản lý nhân lực và dữ liệu nội bộ hàng đầu cho phòng khám/bệnh viện</h4>
                </div>
            </div>
            <div className='form-width'>
                <Outlet />
            </div>
        </div>
    )
}

export default  {AuthLayout}
