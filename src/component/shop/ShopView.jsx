import React, { Component, PropTypes } from 'react';
import store from './store';
import { NavBar, WhiteSpace, Toast, Modal, Icon, List } from 'antd-mobile';
import { PAY_TYPE_TEXT } from './config';
import svg from '../../assets/svg';
const alert = Modal.alert;
const Item = List.Item;

export default class ShopEdit extends Component {
  constructor(props) {
    super(props);
    this.shop = store.getShop(this.props.params.id);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClickBack() {
    this.props.router.goBack();
  }

  handleEdit(id) {
    this.props.router.push(`/shop/edit/${id}`);
  }

  handleDelete(id) {
    alert('删除', `确定删除${this.shop.shopName}吗？`, [
      {
        text: '确定',
        onPress: () => {
          store.delShop(id);
          Toast.info('门店已删除');
          this.props.router.push('/shop/list');
        },
      },
      {
        text: '取消',
      },
    ]);
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={this.handleClickBack}
          rightContent={[
            <a key="0" onClick={() => this.handleDelete(this.shop.shopId)}>
              <Icon
                type={svg.delete}
              />
            </a>,
            <a key="1" onClick={() => this.handleEdit(this.shop.shopId)}>
              <Icon
                type={svg.edit}
              />
            </a>,
          ]}
        >
          {this.shop.shopName}
        </NavBar>
        <WhiteSpace />
        <List>
          <Item extra={this.shop.shopName}>店名</Item>
          <Item extra={this.shop.brandName}>品牌</Item>
          <Item extra={this.shop.categoryName}>品类</Item>
          <Item
            multipleLine
            wrap
            extra={`
            ${this.shop.provinceName}
            ${this.shop.cityName}
            ${this.shop.districtName || ''}
            ${this.shop.address}
          `}
          >地址</Item>
          <Item extra={this.shop.mobileNo}>电话</Item>
          <Item extra={PAY_TYPE_TEXT[this.shop.payType]}>收款方式</Item>
          <Item extra={this.shop.receiveUserId}>收款帐号</Item>
        </List>
      </div>
    );
  }
}

ShopEdit.propTypes = {
  router: PropTypes.object,
  params: PropTypes.object,
};
