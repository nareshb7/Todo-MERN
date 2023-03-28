import React from 'react'


export const setCookie = (cvalue, exdays) => {
    const d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    let expires = "expires=" + d.toUTCString()
    document.cookie = 'todoUser' + "=" + cvalue + ";" + expires + ";path=/"
}

const CookieComp = () => {
    const getCookie = (cname) => {
        let totalCookie = document.cookie.split(';')
        let ca = totalCookie.find(val => val.includes(cname))
        console.log(ca, 'ca')
        if (ca) {
            ca = ca.split('=')
            return ca[1]
        }
        return null
    }
    const checkCookie = () => {
        let user = getCookie('todoUser')
        if (user) {
            return user
        } else {
            setCookie('9010586402', 3)
            return false
        }
    }
    return checkCookie()
}

export default CookieComp