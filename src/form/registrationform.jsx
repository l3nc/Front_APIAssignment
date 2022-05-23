import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  let navigate = useNavigate;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    if (
      email !== '' &&
      password !== '' &&
      passwordConfirm !== '' &&
      name !== ''
    ) {
      axios
        .post('http://127.0.0.1:3001/api/v1/cws/signup', {
          email: email,
          password: password,
          passwordConfirm: password,
          name: name,
        })

        .then((res) => {
          alert('register Success');
          navigate('/');
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
      name='register'
      {...formItemLayout}
      scrollToFirstError
      onSubmit={onSubmit}
    >
      <Form.Item
        name='email'
        label='E-mail'
        rules={emailRules}
        onChange={handleOnChangeEmail}
        value={email}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={passwordRules}
        onChange={handleOnChangePassword}
        value={password}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        rules={confirmRules}
        onChange={handleOnChangePasswordConfirm}
        value={passwordConfirm}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='username'
        label='Username'
        rules={usernameRules}
        onChange={handleOnChangeName}
        value={name}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit' onClick={register}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
