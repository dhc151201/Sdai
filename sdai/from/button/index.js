const getClassName= function(){
    return `btn 
            btn-${this.properties.block ? 'block' : ''}
            btn-${this.properties.size} 
            btn-${this.properties.type} 
            `
}
const sgetStyleStr= function(){
    return `${this.properties.radius != -1 ? 'border-radius:' + this.properties.radius+ 'rpx;' : ''}
            ${this.properties.width ? 'width:' + this.properties.width + 'rpx;' : ''}
            ${this.properties.fontsize ? 'font-size:' + this.properties.fontsize + 'rpx;' : ''}
            ${this.properties.height ? 'height:' + this.properties.height + 'rpx; line-height:' + this.properties.height+ 'rpx;' : ''}
            `
}

Component({
    properties: {
        block: {
            type: Boolean,
            value: false
        },
        //按钮大小 normal / small / smaller / large
        size:{
            type: String,
            value: "normal",
            observer(newVal) {
                this.setClass();
            }
        },
        fontsize:{
            type: Number,
            value: 0,
            observer(newVal) {
                this.setStyle();
            }
        },
        //按钮主题 default / error / success / cancel / transparent
        type: {
            type: String,
            value: "default",
            observer(newVal) {
                this.setClass();
            }
        },
        width: {
            type: Number,
            value: 0,
            observer(newVal) {
                this.setStyle();
            }
        },
        height: {
            type: Number,
            value: 0,
            observer(newVal) {
                this.setStyle();
            }
        },
        radius: {
            type: Number,
            value: -1,
            observer(newVal) {
                this.setStyle();
            }
        },
        //zh_CN / en
        lang: {
            type: String,
            value: "zh_CN"
        },
        //是否需要formId发送模版消息
        reportSubmit: {
            type: Boolean,
            value: false
        },
        //submit / reset
        formType:{
            type: String,
            value: ""
        },
        //getUserInfo / share / getPhoneNumber / openSetting / contact / launchApp / feedback
        openType:{
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: false
        },
        loading: {
            type: Boolean,
            value: false
        }
    },
    data: {

    },
    attached() {
        this.setClass();
        this.setStyle();
    },
    methods: {
        setClass(){
            this.setData({
                className: getClassName.call(this)
            })
        },
        setStyle(){
            this.setData({
                styleStr: sgetStyleStr.call(this)
            })
        },
        submit(e){
            this.triggerEvent('submit', e.detail)
        },
        reset(e){
            this.triggerEvent('reset', e.detail)
        }
    }
})
