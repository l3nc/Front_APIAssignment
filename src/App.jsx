import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Frame from './components/frame';
import RegistrationForm from './../src/data/register';
import About from './../src/data/about';
import LoginForm from './../src/data/login';

import {
  FileAddOutlined,
  UserSwitchOutlined,
  NotificationOutlined,
  TeamOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import Login from './../src/data/login';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem(
    'Sign Up',
    '1',
    <Link to='/register'>
      <FileAddOutlined />
    </Link>
  ),

  getItem(
    'Charity Login',
    '2',
    <Link to='/login'>
      <UserSwitchOutlined />
    </Link>
  ),
  getItem(
    'About',
    '3',
    <Link to='/about'>
      <NotificationOutlined />
    </Link>
  ),
  getItem('Dog Adoption', '4', <TeamOutlined />),
  getItem('Home', '5', <HomeOutlined />),
];

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className='logo' />
            <Menu
              theme='dark'
              defaultSelectedKeys={['1']}
              mode='inline'
              items={items}
            />
          </Sider>
          <Layout className='site-layout'>
            <Header
              className='site-layout-background'
              style={{
                padding: 0,
              }}
            />
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              ></Breadcrumb>
              <div
                className='site-layout-background'
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Routes>
                  <Route path='/register' element={<RegistrationForm />} />
                  <Route path='/login' element={<LoginForm />} />
                  <Route path='/about' element={<About />} />
                </Routes>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Create by Nelson Chung
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

//export default () => <SiderDemo />;
