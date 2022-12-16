import "App.less";
import React, { useEffect, useState } from "react";
import { Dropdown, Layout, Menu } from "antd";
import { EditOutlined, TeamOutlined, ReadOutlined, DownOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";



const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = () => {
    const [username, setUsername] = useState("匿名用户");
    const menu = (
        <Menu>
            <Menu.Item key="n">退出登录</Menu.Item>
        </Menu>
    );

    return (
        <Layout>
            <Header className="header">
                <div className="right">
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdow-link" href="!#" onClick={(e) => e.preventDefault()}>
                            <img src={"../assets/images/defaultAvatar.jpg"} className="avatar" alt="" />
                            <span >{username}</span>
                            <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
            </Header>
            <Layout>
                <Sider
                    theme="dark"
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                    }}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1" icon={<EditOutlined />}>
                            消息列表
                        </Menu.Item>
                        <Menu.Item key="2" icon={<ReadOutlined />}>
                            修改资料
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined />}>
                            好友列表
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content className="mycontent">
                    <Outlet />
                </Content>
            </Layout>
            <Footer className="footer">Respect | Copyright © 2022 Author wch</Footer>
        </Layout>
    );
};

export default App;
