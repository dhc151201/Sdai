
Component({
    properties: {
        value: {
            type: Number,
            value: 0
        },
        min: {
            type: Number,
            value: 1
        },
        max: {
            type: Number,
            value: 100
        },
        step: {
            type: Number,
            value: 1
        },
        disable: {
            type: Boolean,
            value: false
        },
    },
    data: {

    },
    methods: {
        minus() {
            this.setData({
                value: this.data.value - this.data.step
            }, this.change);
        },
        add() {
            this.setData({
                value: this.data.value + this.data.step
            }, this.change);
        },
        change() {
            this.triggerEvent('change', { value: this.data.value })
        }
    }
})
