import "App.less";
import React, { useEffect, useState } from "react";
import { Dropdown, Layout, Breadcrumb, Menu } from "antd";
import { EditOutlined, TeamOutlined, AccountBookOutlined, ReadOutlined, SelectOutlined, DownOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
// import logo from "assets/images/logo.png";



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
                        <SubMenu key="sub1" icon={<TeamOutlined />} title="小编">
                            <Menu.Item key="1" icon={<EditOutlined />}>
                                文章编辑
                            </Menu.Item>
                            <Menu.Item key="2" icon={<ReadOutlined />}>
                                查看文章列表
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="管理员">
                            <Menu.Item key="3" icon={<EditOutlined />}>
                                文章编辑
                            </Menu.Item>
                            <Menu.Item key="4" icon={<ReadOutlined />}>
                                查看文章列表
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SelectOutlined />}>
                                小编名单
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<AccountBookOutlined />} title="超级管理员">
                            <Menu.Item key="6" icon={<EditOutlined />}>
                                文章编辑
                            </Menu.Item>
                            <Menu.Item key="7" icon={<ReadOutlined />}>
                                查看文章列表
                            </Menu.Item>
                            <Menu.Item key="8" icon={<SelectOutlined />}>
                                小编名单
                            </Menu.Item>
                            <Menu.Item key="9" icon={<TeamOutlined />}>
                                管理员名单
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content className="content">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>文章编辑</Breadcrumb.Item>
                    </Breadcrumb>
                    <section className="content_main">
                        {/* 在此处渲染页面内容 */}
                    </section>
                </Content>
            </Layout>
            <Footer className="footer">Respect | Copyright © 2022 Author wch</Footer>
        </Layout>
    );
};

export default App;

// import "App.less";
// import React, { useState } from 'react';
// import {
//     DesktopOutlined,
//     FileOutlined,
//     PieChartOutlined,
//     TeamOutlined,
//     UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// const { Header, Content, Footer, Sider } = Layout;


// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//     label: React.ReactNode,
//     key: React.Key,
//     icon?: React.ReactNode,
//     children?: MenuItem[],
// ): MenuItem {
//     return {
//         key,
//         icon,
//         children,
//         label,
//     } as MenuItem;
// }

// const items: MenuItem[] = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

// const App = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();

//     return (
//         <Layout style={{ minHeight: '100vh' }}>
//             <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//                 <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
//                 <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//             </Sider>
//             <Layout className="site-layout">
//                 {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
//                 <Content style={{ margin: '0 16px' }}>
//                     <Breadcrumb style={{ margin: '16px 0' }}>
//                         <Breadcrumb.Item>User</Breadcrumb.Item>
//                         <Breadcrumb.Item>Bill</Breadcrumb.Item>
//                     </Breadcrumb>
//                     <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
//                         Bill is a cat.
//                     </div>
//                 </Content>
//                 <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//             </Layout>
//         </Layout>
//     );
// };

// export default App;