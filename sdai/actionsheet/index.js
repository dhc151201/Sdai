import { $sdaiMask } from "./../index.js"

Component({
  properties: {

  },
  data: {
    out: true,
    enter: false,
    hidden: true
  },
  methods: {
    nullFun: function(){},
    show: function () {
      $sdaiMask(undefined, this).show();
      this.setData({
        hidden: false,
      })
      setTimeout(() => {
        this.setData({
          enter: true,
          out: false
        })
      }, 50);
    },
    hide: function () {
      $sdaiMask(undefined, this).hide();
      this.setData({
        out: true,
        enter: false
      })
      setTimeout(() => {
        this.setData({
          hidden: true
        })
      }, 300);
    },
  }
})
