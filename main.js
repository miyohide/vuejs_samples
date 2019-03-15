const vm = new Vue({
    el: "#app",
    data: {v: "クリックして編集", f: false},
    methods: {
        c: function () {
            this.f = true;
            // Vue.nextTick https://jp.vuejs.org/v2/api/#Vue-nextTick
            this.$nextTick(function () { this.$refs.r1.focus(); });
        },
    },
});
