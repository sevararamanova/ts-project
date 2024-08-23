import { Form, Input, Button, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Props } from '../../../../components/next-back/NextBack';

const { Item } = Form;

const CheckIn = ({ current, handleNext, handleBack }: Props) => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log(values);

    notification.success({
      message: 'Successfully checked',
      description: 'Your information has been successfully checked',
    });

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="check-in"
      layout="horizontal"
      className="flex-1 flex flex-col justify-between"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex flex-col flex-1 justify-between gap-4 mb-20">
        <Item
          label="Confirmation"
          name="confirmation"
          rules={[{ required: true, message: 'Please confirm!' }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Add any final notes or confirmations here"
          />
        </Item>
      </div>
      <div className="flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button type="primary" htmlType="submit">Submit</Button>
      </div>
    </Form>
  );
};

export default CheckIn;
