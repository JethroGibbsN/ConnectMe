import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
 import './Layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Activities
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              Chat 
            </Menu.Item>
            <Menu.Item key="9" icon={<UserOutlined/>}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        
     


      </Layout>
    );
  }
}

export default SiderDemo;

// <Content style={{ margin: '0 16px' }}>
// <Breadcrumb style={{ margin: '16px 0' }}>
//   <Breadcrumb.Item>User</Breadcrumb.Item>
//   <Breadcrumb.Item>Bill</Breadcrumb.Item>
// </Breadcrumb>
// <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
//   Bill is a cat.
// </div>
// </Content>
// <Layout className="site-layout">
// <Header className="site-layout-background" style={{ padding: 0 }} />

// <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
// </Layout>