const getMoneyStr= function(){
    if (!this.properties.value) return "0.00";
    if (this.properties.value){
        return this.properties.value.toFixed(2);
    }
}
const getClassName= function(){
    return  `${this.properties.del ? 'del ': 'money'}
             ${this.properties.active ? 'active ' : ''}
            `
}
Component({
    properties: {
        value: {
            type: Number,
            value: 0,
            observer(newVal) {
                this.setVal();
            }
        },
        unit: {
            type: String,
            value: "¥",
            observer(newVal) {
                this.setVal();
            }
        },
        del: {
            type: Boolean,
            value: false,
        },
        //按钮主题 success
        active: {
            type: Boolean,
            value: false
        },
    },
    data: {
        _money: "0.00"
    },
    attached() {
        this.setVal();
        this.setClass();
    },
    methods: {
        setVal(){
            this.setData({
                _money: getMoneyStr.call(this)
            })
        },
        setClass(){
            this.setData({
                className: getClassName.call(this)
            })
        }
    }
})
