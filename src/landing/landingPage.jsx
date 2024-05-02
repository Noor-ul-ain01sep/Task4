import { Layout } from 'antd';
const { Header } = Layout;
import AppHeader from '../components/appheader'
import "../Css/App.css"

const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh' }}>

      <Layout className='mainLayout'>
        <Header>
          <AppHeader/>
        </Header>
      </Layout>

      <h1 style={{ textAlign: 'center' }}>Landing Page</h1>
      
      
    </div>
  );
};

export default LandingPage;
