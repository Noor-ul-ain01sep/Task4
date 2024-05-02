import { useState, useEffect } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Title from 'antd/es/typography/Title';
import DarkMode from '../Theme/DarkMode';
import { Link, useLocation } from 'react-router-dom';
import Siderbar from './Siderbar';
import '../Css/App.css';
import PropTypes from 'prop-types';


const { Header, Footer, Sider, Content } = Layout;

const LayoutoFApp = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter((segment) => segment);
    const updatedBreadcrumbs = pathSegments.map((segment, index) => ({
      name: segment.toUpperCase(),
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
    }));
    setBreadcrumbs(updatedBreadcrumbs);
  }, [location.pathname]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div className={`layout-wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Title level={2} >
            NOOR-UL-AIN
          </Title>
          <DarkMode onThemeChange={handleThemeChange} />
        </Header>
        <Layout>
          <Sider width="20%" >
            <Siderbar />
          </Sider>
          <Layout>
            <Content
              style={{
                margin: '70px 16px 16px 380px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              >
                {breadcrumbs.map((breadcrumb, index) => (
                  <Breadcrumb.Item key={index}>
                    {index === breadcrumbs.length - 1 ? (
                      breadcrumb.name
                    ) : (
                      <Link to={breadcrumb.path} className="_link">
                        {breadcrumb.name}
                      </Link>
                    )}
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
              <div 
                style={{
                  padding: 24,
                  minHeight: '100vh',
                }}
              >
                {children} {/* Render children here */}
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Project Two ©{new Date().getFullYear()} Created by Noor-ul-ain
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};


LayoutoFApp.propTypes =
{
  children: PropTypes.string.isRequired,
};

export default LayoutoFApp;
