'use strict'
export function get(that, endPoint) {
    let userData = JSON.parse(sessionStorage.getItem("userInfo"));
    let authorization = userData.accessToken;
    let headerData = {
        'Authorization': authorization,
        'Content-Type': 'application/json'
    }
    return new Promise(function(resolve, reject) {
        that.$http.get(endPoint, {
            headers: headerData
        }).then(response => {
            return resolve(response.body)
        }, response => {
            return reject(response.body)

        })
    })
}

export function post(that, endPoint, InputJson) {
    let userData = JSON.parse(sessionStorage.getItem("userInfo"));
    let authorization = userData.accessToken;
    let headerData = {
        'Authorization': authorization,
        'Content-Type': 'application/json'
    }
    return new Promise(function(resolve, reject) {
        that.$http.post(endPoint, InputJson, {
            headers: headerData
        }, ).then(response => {
            return resolve(response.body)
        }, response => {
            return reject(response.body)

        })
    })
}