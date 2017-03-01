import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import menu from './data/menu';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
    };
    this.handleClickMenuItem = this.handleClickMenuItem.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  handleClickMenuItem(item) {
    location.href = menu[item.key].link;
  }

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode={this.state.mode}
            defaultSelectedKeys={['6']}
            onClick={this.handleClickMenuItem}
          >
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">门店</span></span>}
            >
              <Menu.Item key="2">所有</Menu.Item>
              <Menu.Item key="3">新增</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 0 0 16px' }}>
            <h1>{this.props.title}</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ marginTop: '12px', padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©2017 Koubei
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

AppLayout.defaultProps = {
  title: '口碑商户管理后台',
};

AppLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AppLayout;
