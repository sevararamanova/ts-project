import { useSignInMutation } from '../../../redux/api/auth-api';

import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { LoginRequest } from '../../../types/dataTypes';

const SignIn = () => {
  const [login, { isLoading }] = useSignInMutation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: LoginRequest) => {
    try {
      const response = await login(values).unwrap();
      localStorage.setItem('token', response.token);
      message.success('Login successful');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error); 
      message.error('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div >
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
          >
            <Input className="border-gray-300 rounded-md" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password className="border-gray-300 rounded-md" placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} className="w-full bg-blue-500 hover:bg-blue-600">
              Log In
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an account?</span>
          <Button
            type="link"
            onClick={() => navigate('/auth/signup')} 
            className="ml-2 text-blue-500 hover:text-black-600"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
