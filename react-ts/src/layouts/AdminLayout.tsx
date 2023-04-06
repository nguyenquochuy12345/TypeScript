import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScheduleOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;


const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'User',
              
              
            },
            {
              key: '2',
              icon: <ShoppingOutlined />,
              label: 'Product',
            },
            {
              key: '3',
              icon: <ScheduleOutlined />,
              label: 'Category',
            },
            {
              key: '4',
              icon: <ShoppingCartOutlined />,
              label: 'Cart',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminLayout


