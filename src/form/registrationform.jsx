// import { Button, Checkbox, Form, Input } from 'antd';
// import React from 'react';

// const registrationForm = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       name='basic'
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete='off'
//     >
//       <Form.Item
//         label='Username'
//         name='username'
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='Email'
//         name='email'
//         rules={[
//           {
//             required: true,
//             message: 'Please input your email!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='Password'
//         name='password'
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item
//         label='Confirm Password'
//         name='Confirm password'
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name='remember'
//         valuePropName='checked'
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type='primary' htmlType='submit'>
//           submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default registrationForm;

import React from 'react';
import { Form, Input, Button } from 'antd';
import http from '../common/http-common';

function onFinish(values) {
  //console.log("Success", values)

  const { confirm, ...data } = values;
  http
    .post('/users', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const emailRules = [
  { type: 'email', message: 'The input is not valid E-mail!' },
  { required: true, message: 'Please input your E-mail!' },
];

const passwordRules = [
  { required: true, message: 'Please input your password!' },
];

const confirmRules = [
  { required: true, message: 'Please confirm your password!' },
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject('The passwords that you entered do not match!');
    },
  }),
];

const usernameRules = [
  { required: true, message: 'Please input your username!', whitespace: true },
];

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

function RegistrationForm() {
  return (
    <Form
      name='register'
      {...formItemLayout}
      scrollToFirstError
      onFinish={onFinish}
    >
      <Form.Item name='email' label='E-mail' rules={emailRules}>
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={passwordRules}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        rules={confirmRules}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name='username' label='Username' rules={usernameRules}>
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
