import { Menu} from 'antd';
import "../Css/App.css"
import { Link } from 'react-router-dom';
const appheader = () => {
  return (
    <div className='container'>
    <div className="APP_Header">
  
    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
  <Menu.Item key="1">Home</Menu.Item>
  <Menu.Item key="2">About</Menu.Item>
  <Menu.Item key="3">Services</Menu.Item>
  <Menu.Item key="4">Portfolio</Menu.Item>
  <Menu.Item key="5">Contact</Menu.Item>
  <Menu.Item key="6">
    <Link to="/login">Login</Link>
  </Menu.Item>
</Menu>
    </div>
    </div>
  )
}

export default appheader