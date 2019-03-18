// libs/sdai/spin/index.js
Component({
    properties: {
        show: {
            type: Boolean,
            value: false,
            observer(newVal) {
                this.showHideTaggle();
            }
        },
        //大小 normal / small / smaller / large
        size: {
            type: String,
            value: "normal"
        },
        color: {
            type: String,
            value: "#ffac1a",
            observer(newVal) {
                this.setStyle();
            }
        },
        padding: {
            type: String,
            value: "16rpx 0",
            observer(newVal) {
                this.setStyle();
            }
        },
    },
    data: {
        _style: "",
        _styleBox: "",
        _tranBox: "",
        _show: false,
    },
    attached() {
        this.setStyle();
        this.showHideTaggle();
    },
    ready(){
        this.getSelfHeight();
    },
    methods: {
        setStyle(){
            this.setData({
                "_style": `background-color: ${this.properties.color};`,
                "_styleBox": `padding: ${this.properties.padding};`
            })
        },
        getSelfHeight(){

            this.createSelectorQuery().select('.spin-box').boundingClientRect( (rect)=> {
                if(rect.height){
                    this.height = rect.height;
                    this.setData({
                        "_tranBox": `height: ${rect.height }px;`
                    }, ()=>{
                        setTimeout(()=>{
                            this.data._show ? this.show() : this.hide();
                        }, 100)
                        
                    })
                }
            }).exec();
            
        },
        showHideTaggle(){
            //  防止重复的相同值设置
            if(this.data._show == this.properties.show) return;

            this.setData({
                _show: this.properties.show,
            })

            //  节点信息未获取时 进行拦截
            if(!this.height) return;

            this.properties.show ? this.show() : this.hide();
            
        },
        show(){
            this.setData({
                "_tranBox": `height: ${this.height }px;opacity: 1;transition: all 300ms ease-in;`
            })
        },
        hide(){
            this.setData({
                "_tranBox": `height: 0;opacity: 0; transition: height 400ms ease-out;`
            })
        }
    }
})
