import React, { Component, PropTypes } from 'react';
import store from './store';
import { NavBar, Icon, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import svg from '../../assets/svg';

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: store.getList(),
    };
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickShop = this.handleClickShop.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
  }

  handleClickBack() {
    this.props.router.goBack();
  }

  handleClickShop(id) {
    this.props.router.push(`/shop/view/${id}`);
  }

  handleClickNew() {
    this.props.router.push('/shop/add');
  }

  render() {
    return (
      <div>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={this.handleClickBack}
          rightContent={[
            <a key="0" onClick={this.handleClickNew}>
              <Icon
                type={svg.plus}
              />
            </a>,
          ]}
        >门店
        </NavBar>
        {this.state.shopList.map(shop => (
          <div key={shop.shopId} onClick={() => this.handleClickShop(shop.shopId)}>
            <WingBlank>
              <WhiteSpace />
              <Card>
                <Card.Header
                  title={shop.shopName}
                  thumb={shop.shopLogo}
                  extra={shop.brandName}
                />
                <Card.Body>
                  <div>
                    <p>品类：{shop.categoryName}</p>
                  </div>
                </Card.Body>
                <Card.Footer
                  content={shop.mobileNo}
                  extra={shop.address}
                />
              </Card>
              <WhiteSpace />
            </WingBlank>
          </div>
        ))}
      </div>
    );
  }
}

ShopList.propTypes = {
  router: PropTypes.object,
};

export default ShopList;
