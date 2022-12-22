import "App.less";
import React, { useEffect, useState } from "react";
import {Layout, Menu } from "antd";
import { EditOutlined, TeamOutlined, ReadOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import MyHeader from "components/MyHeader";
import { connect } from "react-redux";
import { Dispatch} from "react";

const { Sider, Content } = Layout;

interface Iprops {
    key: number;
    changeKeyFn: () => void;
}

function App(props:Iprops){

    return (
        <Layout className="container">
            <MyHeader key={props.key} />
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
                            <Link to={'/means'}><EditOutlined />修改资料</Link>
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

//state的映射
const mapStateToProps = (state: { key: number }) => {
    return {
        key: state.key
    }
}


//dispatch的映射
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeKeyFn() {
            dispatch({ type: "changeKey" })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
