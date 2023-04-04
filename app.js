// app.js
const req = require('./utils/request.js');

App({ 
  onLaunch() {       
    // 展示本地存储能力 
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {   
        req.login({code:res.code}).then(re=>{   
          wx.setStorageSync('askMetoken', re.data)    
        }) 
        // /wxmini/user/login
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
