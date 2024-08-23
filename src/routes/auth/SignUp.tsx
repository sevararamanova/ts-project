import { useRegisterMutation } from '../../redux/api/index';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { RegisterRequest } from '../../types/dataTypes';

const SignUp = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: RegisterRequest) => {
    try {
      await register(values).unwrap();
      message.success('Registration successful!');
      navigate('/auth/signin');
    } catch (error) {
      console.error('Registration error:', error);
      message.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="p-5 flex items-center justify-center bg-gray-100 min-h-full">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[{ required: true, message: 'Please enter your first name!' }]}
          >
            <Input className="border-gray-300 rounded-md" placeholder="Enter your first name" />
          </Form.Item>
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
            <Button type="primary" htmlType="submit" loading={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
             Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <Button
            type="link"
            onClick={() => navigate('/auth/signin')}
            className="text-blue-600 hover:text-blue-700"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
