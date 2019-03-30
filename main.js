const vm = new Vue({
    el: "#app",
    data: {
        a: "",
        b: "",
        c: "",
    },
    watch: {
        a: function(v) { if (v.length >= 3) { this.$refs.r2.focus(); } },
        b: function(v) { if (v.length >= 4) { this.$refs.r3.focus(); } },
    },
});
