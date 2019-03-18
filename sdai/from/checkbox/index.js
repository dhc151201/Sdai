
Component({
    properties: {
        size: {
            type: Number,
            value: 46
        },
        chose: {
            type: Boolean,
            value: false,
            observer(newVal) {
                this.setData({
                    _chose: value
                }, this.setClass )
            }
        }
    },
    data: {
        _chose: false
    },
    attached(){
        this.setClass();
    },
    methods: {
        setClass(){
            this.setData({
                className: this.data._chose ? "icon-duoxuan color-blue" : "icon-danxuanweixuanzhong color-light",
            })
        },
        tap(){
            this.setData({ _chose: !this.data._chose }, this.setClass);
            this.change();
        },
        change() {
            this.triggerEvent('change', { value: this.data._chose })
        }
    }
})
