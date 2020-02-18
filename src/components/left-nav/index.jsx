import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import { Menu, Icon } from 'antd';

import './index.less'
import logo from "../../assets/images/icon2.jpg"
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

class LeftNav extends Component {
    /*
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
            return (
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    { this.getMenuNodes_map(item.children) }
                </SubMenu>
            )
        });
    };*/

    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname;
        return menuList.reduce((pre, item) => {
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ));
            } else {
                if (item.children.find(item => item.key === path)){
                    this.openKey = item.key;
                }

                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                        }
                    >
                        { this.getMenuNodes(item.children) }
                    </SubMenu>
                ));
            }
            return pre;
        }, []);
    };

    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList);
    }

    render() {
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <div>
                <div className='left-nav'>
                    <Link to="/" className='left-nav-header'>
                        <img src={logo} alt="logo"/>
                        <h1>后台系统</h1>
                    </Link>
                </div>
                <Menu
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    { this.menuNodes }
                </Menu>
            </div>
        );
    }
}


export default withRouter(LeftNav);