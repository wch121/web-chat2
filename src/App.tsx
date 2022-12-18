import "App.less";
import React, { useEffect, useState } from "react";
import { Dropdown, Layout, Menu } from "antd";
import { EditOutlined, TeamOutlined, ReadOutlined, DownOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import MyHeader from "components/MyHeader";

let arr:number[]=[];
for(var i=0;i<80;i++){
    arr.push(i)
}

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
        <Layout className="container">
            <MyHeader />
            <Layout className="container_content">
                <Sider width={200} >
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultOpenKeys={['4']}
                        style={{ height: '200%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to={'/message'}><ReadOutlined />信息列表</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={'/friends'}><TeamOutlined />好友列表</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={'/means'}><ReadOutlined />修改资料</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content className="mycontent">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout >
            <footer style={{
                textAlign: 'center',
                color: '#fff',
                height: '70px',
                lineHeight: '70px',
                background: '#001529'
            }}>Respect | Copyright &copy; 2022 Author wch</footer>
        </Layout>
    );
};

export default App;
