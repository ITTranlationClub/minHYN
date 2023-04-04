
 const req = require('../../utils/request.js');

  
Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['GPT', '等待开发...']
    let index=0
    const tabs = titles.map(item => ({title: item ,index:index++}))
    this.setData({tabs})
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },
  GPTGO(){
    let param={
      "model": "",
      "messages": [
        {
          "role": "",
          "content": ""
        }
      ]
    }
    req.post('chatgpt/askquestion',param).then(res=>{
        console.log(res)
    })

  },
  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  }

})
