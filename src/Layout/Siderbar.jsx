import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { DashboardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import '../Css/App.css';

const Siderbar = ({ theme }) => {
  const links = [
    {
      name: 'Dashboard',
      path: '/Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      name: 'Profile',
      path: '/Profile',
      icon: <UserOutlined />,
    },
    {
      name: 'Settings',
      path: '/Settings',
      icon: <SettingOutlined />,
    },
  ];

  const pathname = useLocation().pathname;

  return (
    <div className={`layout-wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Menu theme={theme} defaultSelectedKeys={['/Dashboard']} selectedKeys={[pathname]}>
        {links?.map((link) => (
          <Menu.Item key={link.path} icon={link.icon}>
            <Link to={link.path}>{link.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

Siderbar.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Siderbar;
