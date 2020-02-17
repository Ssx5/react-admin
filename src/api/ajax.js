/*
* 发送ajax请求
* */

import axios from "axios"
import { message } from "antd"


export default function ajax(url, data={}, type= "GET") {
    return new Promise((resolve, reject) => {
        let promise;
        promise = type === "GET" ? axios.get(url, {params: data}) : axios.post(url, data);
        promise.then(response => {
            resolve(response.data);
        }).catch(error =>{
            message.error(error.message)
        });
    })

}