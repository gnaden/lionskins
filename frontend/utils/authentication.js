import Cookies from 'js-cookie'
import StorageManager from './StorageManager'

class AuthenticationManager {
  getToken () {
    return Cookies.get('token')
  }

  getRefreshToken () {
    return Cookies.get('refreshToken')
  }

  setToken (token) {
    if (token) {
      Cookies.set('token', token)
    } else {
      Cookies.remove('token')
    }
  }

  setRefreshToken (token) {
    if (token) {
      Cookies.set('refreshToken', token)
    } else {
      Cookies.remove('refreshToken')
    }
  }

  startOpenId () {
    StorageManager.set('openid.redirect', window.location.pathname, false)
    window.location = `${process.env.NEXT_PUBLIC_API_DOMAIN}/steam/login`
  }
}

export default new AuthenticationManager()