const getClassName = function () {
    return `btn-group 
            btn-group-${this.properties.block ? 'block' : ''}
            btn-group-${this.properties.size} 
            btn-group-${this.properties.type} 
            `
}
const getStyleStr = function () {
    return `${this.properties.radius != -1 ? 'border-radius:' + this.properties.radius + 'rpx;' : ''}
            ${this.properties.width ? 'width:' + this.properties.width + 'rpx;' : ''}
            ${this.properties.height ? 'height:' + this.properties.height + 'rpx; line-height:' + this.properties.height + 'rpx;' : ''}
            `
}
Component({
    properties: {
        block: {
            type: Boolean,
            value: false
        },
        //按钮组大小 normal / small / smaller / large
        size: {
            type: String,
            value: "normal",
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
    },
    data: {

    }, 
    attached() {
        this.setClass();
        this.setStyle();
    },
    methods: {
        setClass() {
            this.setData({
                className: getClassName.call(this)
            })
        },
        setStyle() {
            this.setData({
                styleStr: getStyleStr.call(this)
            })
        }
    }
})
