import { Form, Input, Select, Button } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Props } from '../../../../components/next-back/NextBack';

const { Item } = Form;

const TechnicalInfo = ({ current, handleNext, handleBack }: Props) => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log(values);
    handleNext();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="technical-info"
      layout="horizontal"
      className="flex-1 flex flex-col justify-between"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="flex flex-col flex-1 justify-between gap-4 mb-20">
        <Item
          label="Engine Type"
          name="engineType"
          rules={[{ required: true, message: 'Please input engine type!' }]}
        >
          <Input />
        </Item>
        <Item
          label="Transmission"
          name="transmission"
          rules={[{ required: true, message: 'Please select transmission!' }]}
        >
          <Select
            options={[
              { value: 'manual', label: 'Manual' },
              { value: 'automatic', label: 'Automatic' },
            ]}
          />
        </Item>
        <Item
          label="Fuel Type"
          name="fuelType"
          rules={[{ required: true, message: 'Please select fuel type!' }]}
        >
          <Select
            options={[
              { value: 'petrol', label: 'Petrol' },
              { value: 'diesel', label: 'Diesel' },
              { value: 'electric', label: 'Electric' },
            ]}
          />
        </Item>
        <Item
          label="Additional Notes"
          name="additionalNotes"
        >
          <Input.TextArea
            rows={4}
            placeholder="Any additional technical details"
          />
        </Item>
      </div>
      <div className="flex justify-between">
        <Button onClick={handleBack}>Back</Button>
        <Button type="primary" htmlType="submit">Next</Button>
      </div>
    </Form>
  );
};

export default TechnicalInfo;
