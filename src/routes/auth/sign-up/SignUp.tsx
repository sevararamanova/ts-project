import { Typography, Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../../redux/api/auth-api";  
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type FieldType = {
  first_name: string;
  email: string;
  password: string;
};

const SignUp = () => {
    const [signUp, {data,isSuccess}] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    signUp(values)
  };

  useEffect(() => {
      if(isSuccess){
          navigate(`/auth/verify-otp?email=${btoa(data.payload.email)}`)
      }
  }, [isSuccess])

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-full bg-[#f0f0f0] flex items-center justify-center">
      <div className="w-[450px] min-h-[430px] bg-white rounded-lg p-7">
        <Typography className="text-4xl text-center font-bold tracking-wider">
          Register
        </Typography>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              layout="vertical"
              wrapperCol={{ offset: 0, span: 24 }}
              label="First Name"
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <br />
            <Form.Item<FieldType>
              layout="vertical"
              wrapperCol={{ offset: 0, span: 24 }}
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
            <br />
            <Form.Item<FieldType>
              layout="vertical"
              wrapperCol={{ offset: 0, span: 24 }}
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <br />
            {/* <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 0, span: 24 }}
            >
              <Checkbox style={{ accentColor: '#111', color: '#111' }}>Remember me</Checkbox> */}
            {/* </Form.Item> */}
            <Form.Item wrapperCol={{ offset: 9, span: 24 }}>
              <Button
                style={{ backgroundColor: "#111" }}
                type="primary"
                htmlType="submit"
                loading={false}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
