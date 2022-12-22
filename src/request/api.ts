import request from './request'

interface IRegisterLogin {
    username: string | number;
    password: string | number;
}

// 注册接口
export const RegisterApi = (params: IRegisterLogin) => request.post('/register', params)

// 登录接口
export const LoginApi = (params: IRegisterLogin) => request.post('/login', params)

interface IChangeUserInfo {
    username?: string;
    password?: string;
    userlabel?: string;
}

//修改用户信息
//username和password目前是可传可不传
export const ChangeUserInfoApi = (params: IChangeUserInfo) => request.post('/info', params)