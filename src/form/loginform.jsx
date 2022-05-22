import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

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
  wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 6 } },
};

function LoginForm() {
  const navigate = Navigate;
  //console.log("Success", values)
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  function onChangeHandler(event) {
    setEmail(event.target.value);
    setPassword(event.target.value);
  }

  const login = (e) => {
    if (email !== '' && password !== '') {
      axios
        .post('http://127.0.0.1:3001/api/v1/cws/login', {
          email: email,
          password: password,
        })

        .then((res) => {
          alert('Login Success');

          navigate('/about');
        })
        .catch((e) => {
          if (e.response.error) {
            alert('email or password incorrect!');
          }
        });
    }
  };
  return (
    <Form name='Login' {...formItemLayout} scrollToFirstError onFinish={login}>
      <Form.Item name='email' label='E-mail' rules={emailRules}>
        <Input
          name='email'
          type='text'
          onchange={onChangeHandler}
          value={email}
        />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={passwordRules}
        hasFeedback
      >
        <Input.Password
          name='password'
          type='text'
          onchange={onChangeHandler}
          value={password}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
