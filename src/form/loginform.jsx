import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const emailRules = [
  { type: 'email', message: 'The input is not valid E-mail!' },
  { required: true, message: 'Please input your E-mail!' },
];

const passwordRules = [
  { required: true, message: 'Please input your password!' },
];

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 } },
};
const tailFormItemLayout = {
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 10 } },
};

function LoginForm() {
  let navigate = useNavigate;
  //console.log("Success", values)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleClick() {
    navigate(-1);
  }
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const login = (e) => {
    if (email !== '' && password !== '') {
      axios
        .post('http://127.0.0.1:3001/api/v1/cws/login', {
          email: email,
          password: password,
        })

        .then((res) => {
          alert('Login Success');
        })
        .catch((e) => {
          if (e.response) {
            alert(e.response.data.message);
          }
        });
    }
  };
  return (
    <Form
      name='Login'
      {...formItemLayout}
      scrollToFirstError
      onSubmit={onSubmit}
    >
      <Form.Item
        name='email'
        label='E-mail'
        rules={emailRules}
        onChange={handleEmail}
        value={email}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={passwordRules}
        onChange={handlePassword}
        value={password}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type='primary' htmlType='submit' onClick={login}>
            Login
          </Button>
          <Button type='secondary' htmlType='submit' onClick={handleClick}>
            Forgot Password
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
