// libs/sdai/from/slider/index.js
Component({
    properties: {
        min: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 100
        },
        value: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        activeColor: {
            type: String,
            value: "#ffac1a"
        },
        blockColor: {
            type: String,
            value: "#fff"
        },
        backgroundColor: {
            type: String,
            value: "rgb(224,224,224)"
        },
    },
    data: {

    },
    methods: {
        changing: function (event){
            this.triggerEvent("changing", event.detail )
        }
    }
})
