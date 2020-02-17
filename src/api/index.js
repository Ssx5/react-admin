/*
* 请求后端接口
* */
import ajax from "./ajax";

/*
export function reqLogin(username, password) {
    return ajax("/login", {username, password});
}
*/

// 登录接口
export const reqLogin = (username, password) => ajax("/login", {username, password}, "POST");

// 添加用户
export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");