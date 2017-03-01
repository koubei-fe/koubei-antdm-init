import React, { Component, PropTypes } from 'react';
import ShopEntity from './ShopEntity';
import ShopForm from './ShopForm';
import { NavBar, WhiteSpace } from 'antd-mobile';

export default class ShopAdd extends Component {
  constructor(props) {
    super(props);
    this.shop = new ShopEntity();
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  handleClickBack() {
    this.props.router.goBack();
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={this.handleClickBack}
        >
          新建门店
        </NavBar>
        <WhiteSpace />
        <ShopForm isEdit={false} shop={this.shop} router={this.props.router} />
      </div>
    );
  }
}

ShopAdd.propTypes = {
  router: PropTypes.object,
};
