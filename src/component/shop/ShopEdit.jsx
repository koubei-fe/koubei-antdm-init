import React, { Component, PropTypes } from 'react';
import store from './store';
import ShopForm from './ShopForm';
import { NavBar, WhiteSpace, Toast, Modal, Icon } from 'antd-mobile';
import svg from '../../assets/svg';
const alert = Modal.alert;

export default class ShopEdit extends Component {
  constructor(props) {
    super(props);
    this.shop = store.getShop(this.props.params.id);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClickBack() {
    this.props.router.goBack();
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
          ]}
        >
          {this.shop.shopName}
        </NavBar>
        <WhiteSpace />
        <ShopForm isEdit shop={this.shop} router={this.props.router} />
      </div>
    );
  }
}

ShopEdit.propTypes = {
  router: PropTypes.object,
  params: PropTypes.object,
};
