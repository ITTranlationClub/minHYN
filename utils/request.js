const http="http://localhost:9051/"

const appid='wxb37c825ffbb78439'

const request = function(url, options) {
  return new Promise((resolve, reject)=> { 
      wx.request({
          url: http + url,
          method: options.method,
          data: options.data,
          header: {
             'askMetoken': wx.getStorageSync('askMetoken')
          },
          success: (res) => { //请求成功
            resolve(res.data);
              // if (res.data.code == 200) { //成功
              //     resolve(res);
              // } else { //失败
              //   resolve('111');
              //     wx.hideLoading();//隐藏加载提示
              //     wx.showModal({
              //         title: '失败',
              //         cancelColor: res.data.msg,
              //         showCancel: false
              //     })
              // }
          },
          fail: (err) => {//请求失败
              reject(err);
          }
      })
  }).catch(res=>{
   
  })
}
module.exports = {
    //封装GET方法
    get(url,data){
      return request(url,{method:"GET",data})
  },  
  //封装POST方法
    post(url,data){
      return request(url,{method:"POST",data})
   },
   //登入
   login(data){
     data.appid=appid 
    return request("wxmini/user/login",{method:"GET",data})
  }
}