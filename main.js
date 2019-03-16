const vm = new Vue({
    el: "#app",
    data: {f: false, v: 3},
    methods: {
        c: function () {
            this.v = "";
            this.f = true;
            this.$nextTick(function () { this.$refs.r1.focus(); });
        },
    },
});
