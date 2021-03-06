import { parse } from 'querystring';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
    if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return true;
    }

    return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'development') {
        return true;
    }
    return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

//user
export const setStoredUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const getStoredUser = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
}
export const delStoredUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('antd-pro-authority');
}

//Bearer Token
export const setToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
}