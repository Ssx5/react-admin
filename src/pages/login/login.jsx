import React, { Component } from "react";
import {Form, Icon, Input, Button, message} from 'antd';

import "./login.less"
import logo from "./images/icon1.jpg"
import {reqLogin} from "../../api"

class Login extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                //const { username, password } = values;
                //const result = await reqLogin(username, password);
                const result = {status: 0, msg: ""};
                if (result.status === 0) {
                    message.success("登录成功！");
                    this.props.history.replace("/");
                }else {
                    message.error(result.msg);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo" />
                <h1>React后台管理项目</h1>
            </header>
            <section className="login-content">
                <h2>用户登录</h2>
                <div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator("username", {
                                rules: [{ required: true, message: 'Please input your username!' },],
                            })
                            (<Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>;
    }
}

const WrapLogin = Form.create()(Login);
export default WrapLogin;