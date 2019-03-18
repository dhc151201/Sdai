// components/loading-image/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    src: {
      type: String,
      value: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4074258740,4079621130&fm=26&gp=0.jpg'
    },
    width: {
      type: String,
      value: "100%"
    },
    height: {
      type: String,
      value: "200rpx"
    },
    slotLoading: {
      type: Boolean,
      value: false
    },
    radius: {
      type: Number,
      value: 0
    },
    //是否启用懒加载
    lazyload: {
      type: Boolean,
      value: true
    },
    //是否高亮
    light: {
        type: Boolean,
        value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: true,
    loadedStatus: false,
    errorStatus: false
  },

  /**
   * 组件的方法列表
   */
  attached: function () {
    if (!this.properties.src){
      // this.setData({
      //   errorStatus: true,
      //   loading: false
      // })
    }
  },
  methods: {
    loaded: function(){
      this.setData({
        loadedStatus: true,
        loading: false
      })
    },
    error: function(){
      this.setData({
        errorStatus: true,
        loading: false
      })
    }
  }
})
