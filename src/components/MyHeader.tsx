import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu, message } from 'antd';

export default function MyHeader() {
    const defaultAvatar = require("../assets/images/defaultAvatar.jpg")
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [username, setUsername] = useState("匿名用户");
    const [userlabel, setUserlabel] = useState("个性签名");
    const navigate = useNavigate()

    //componentDidMount
    useEffect(() => {
        if ("avatar" !== null) {
            // let avatar1 = process.env.SERVER_PORT+ '/' + localStorage.getItem("avatar");
            let avatar1 = 'http://localhost:9000/' + localStorage.getItem("avatar");
            setAvatar(avatar1)
        } else {
            let avatar1 = defaultAvatar;
            setAvatar(avatar1)
        }
        let username1 = localStorage.getItem("username") || "匿名用户";
        setUsername(username1)
        let userlabel1 = localStorage.getItem("userlabel") || "";
        setUserlabel(userlabel1)
    }, [])

    //点击修改资料
    const goMeans = () => {
        let token = localStorage.getItem("chat-token")
        if (token) {
            navigate('/means')
        } else {
            //给出提示，并跳转到登录页
            message.warning("登录失败，请重新登录", 1.5);
            setTimeout(() => {
                navigate('/login')
            }, 1500)
        }
    }

    //退出登录
    const logout = () => {
        localStorage.removeItem("chat-token");
        localStorage.removeItem("username");
        localStorage.removeItem("avatar");
        localStorage.removeItem("userlabel");
        //给出提示，并跳转到登录页
        message.success("即将跳转登录页", 1.5);
        setTimeout(() => {
            navigate('/login')
        }, 1500)
    }

    const menu = (
        <Menu>
            <Menu.Item key={1} onClick={goMeans}>修改资料</Menu.Item>
            <Menu.Divider />
            <Menu.Item key={2} onClick={logout}>退出登录</Menu.Item>
        </Menu>
    );

    return (
        <header>
            <div className="right">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdow-link" href="!#" onClick={(e) => e.preventDefault()}>
                        <img src={avatar} className="avatar" alt="" />
                        <span className='span1'>{username}</span>
                        <DownOutlined />
                        <span className='span2'>个性签名：{userlabel}</span>
                    </a>
                </Dropdown>
            </div>

        </header >
    )
}
