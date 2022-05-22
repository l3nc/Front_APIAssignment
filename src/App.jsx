import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Frame from './components/frame';
import RegistrationForm from './../src/data/register';
import About from './../src/data/about';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  EditTwoTone,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Sign Up', '1', <Link to='/register'> </Link>, <EditTwoTone />),
  getItem('Charity Login', '2', <DesktopOutlined />),
  getItem('About', <Link to='/about'></Link>),
  getItem('Dog Adoption', 'sub2', <TeamOutlined />, [
    getItem('All Dogs', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
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
              >
                <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className='site-layout-background'
                style={{
                  padding: 24,
                  minHeight: 360,
                }}
              >
                <Routes>
                  <Route path='/register' element={<RegistrationForm />} />
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
