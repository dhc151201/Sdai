const getStyleStr= function(){
    let dis = this.offset * 0.6;
    return `transform: translate3d(0, ${dis > this.properties.maxoffset ? this.properties.maxoffset : dis}px, 0)`
}
Component({
    properties: {
        distance: {
            type: Number,
            value: 100,
        },
        maxoffset: {
            type: Number,
            value: 180,
        },
        pullingText: {
            type: String,
            value: '下拉刷新',
        },
        prepareText: {
            type: String,
            value: '松开伦家给你啦~',
        },
        refreshingText: {
            type: String,
            value: '正在刷新',
        },
    },
    data: {
        /*
            0: 初始状态 
            -10: 开始下拉 
            1: 开始下拉已超过distance处 
            2: 手指松开 
            3: 回弹至distance处，刷新中 
        */
        prepareStatus: 0
    },
    methods: {
        touchstart(e){
            this.startY = e.changedTouches[0].clientY;
        },
        touchmove(e){
            
            this.scrollTop = e.changedTouches[0].clientY - e.changedTouches[0].pageY;
            this.offset = e.changedTouches[0].clientY - this.startY;

            if (this.prepareStatus > 1) {
                return;
            }
            //console.log(this.scrollTop, this.offset)
            //手指向下滑动
            if (this.offset > 0){
                if (this.scrollTop>= 0){
                    console.warn("page up and top");
                    this.moveDown();
                }else{
                    //console.log("page up")
                }
            }
            //手指向上滑动
            else{
                //console.log("page down")
            }
        },
        touchend(){
            console.log("touchend::: ", this.prepareStatus)
            if (this.prepareStatus == 1 ){
                this.moveback();
            }
            if (this.prepareStatus == -10){
                this.finishPullToRefresh();
            }
        },
        moveDown(){
            this.prepareStatus = -10;
            this.setData({
                styleStr: getStyleStr.call(this)
            })
            //切换准备刷新状态
            if (this.offset > this.properties.distance){
                this.prepareStatus== 1 || this.prepare();
            }
        },
        //准备松开刷新
        prepare(){
            this.prepareStatus= 1;
            this.setData({
                prepareStatus: 1
            })
        },
        //手指松开回弹至distance处
        moveback(){

            console.log(this.prepareStatus)

            this.prepareStatus = 2;
            if (this.offset * 0.6 > this.properties.distance){
                this.setData({
                    styleStr: `transform: translate3d(0, ${ this.properties.distance}px, 0);transition: transform 300ms`
                })
            }
            
            setTimeout(()=>{
                this.prepareStatus = 3;
                this.setData({
                    prepareStatus: 3
                })
                this.scrollTop = null;
                this.offset = null;
                this.triggerEvent('refresh');
                //测试用的
                //setTimeout(() => { this.finishPullToRefresh()}, 1000)
            }, 300)
        },
        //回弹至顶部，下拉刷新结束
        finishPullToRefresh(){
            this.setData({
                styleStr: `transform: translate3d(0, 0, 0);transition: transform 300ms`
            })
            setTimeout(() => {
                this.prepareStatus = 0;
                this.setData({
                    prepareStatus: 0
                })
            }, 300)
        }
    }
})
