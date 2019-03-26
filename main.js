const vm = new Vue({
    el: "#app",
    data: {
        b: null
    },
    methods: {
        a: function () {
            axios.get("https://yesno.wtf/api").then((r) => {this.b = r.data.image});
        },
    },
});
