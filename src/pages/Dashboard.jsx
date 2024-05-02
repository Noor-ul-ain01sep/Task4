import { Area } from '@ant-design/plots';
import { HomeOutlined, BarcodeOutlined, CloudOutlined, FundViewOutlined } from '@ant-design/icons';
import LayoutoFApp from '../Layout/Layout';
import { Col, Row } from 'antd';
import '../Css/App.css'

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'revenue',
    seriesField: 'format',
    colorField: 'group',
    shapeField: 'smooth',
    stack: {
      orderBy: 'maxIndex',
      reverse: true,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    tooltip: { channel: 'y', valueFormatter: '.2f' },
    line: {
      stack: {
        orderBy: 'maxIndex',
        reverse: true,
        y: 'y1',
      },
      style: {
        stroke: 'white',
      },
    },
  };
  return <Area {...config} />;
};

const Dashboard = (theme) => {
  return (
    <LayoutoFApp className={`layout-wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <HomeOutlined /> DASHBOARD
      
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <div className="dashboard-box">
            <BarcodeOutlined className="icon" />
            <h3>Tape</h3>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <div className="dashboard-box">
            <CloudOutlined className="icon" />
            <h3>Disc</h3>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <div className="dashboard-box">
            <FundViewOutlined className="icon" />
            <h3>Streaming</h3>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
          <div className="dashboard-box">
            <FundViewOutlined className="icon" />
            <h3>Streaming</h3>
          </div>
        </Col>
      </Row>

      <DemoArea />
    </LayoutoFApp>
  );
};

export default Dashboard;
