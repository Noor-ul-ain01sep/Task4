import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../Css/App.css'; 

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username === 'Noor' && values.password === '123') {
      onLoginSuccess();
      navigate('/Dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 className="login-form-title">Login Form</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="login-submit-btn">
            Submit
          </Button>
        </Form.Item>

        {error && <div className="login-error">{error}</div>}
      </Form>
    </div>
  );
};

Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
