import React, { Component, PropTypes } from 'react';
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import './user.less';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.router.push('/shop/list');
  }
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;
    const hasError = fieldsError => Object.keys(fieldsError).some(field => fieldsError[field]);
    return (
      <div>
        <WhiteSpace size="xl" />
        {getFieldDecorator('userName', {
          rules: [{
            required: true,
          }],
        })(
          <InputItem autoFocus placeholder="请输入用户名">用户名</InputItem>
        )}

        {getFieldDecorator('password', {
          rules: [{
            required: true,
          }],
        })(
          <InputItem type="password" placeholder="请输入密码">密码</InputItem>
        )}

        <WhiteSpace />

        <WingBlank>
          <Button
            type="primary"
            disabled={hasError(getFieldsError())}
            onClick={this.handleSubmit}
          >
            登录
          </Button>
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  router: PropTypes.object,
};

export default createForm()(Login);
