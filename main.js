const vm = new Vue({
    el: "#app",
    data: {
        a: "",
        b: "",
        c: "",
    },
    methods: {
        b2: function (e) {if (e.target.value == "") { this.$refs.r1.focus() } },
        b3: function (e) {if (e.target.value == "") { this.$refs.r2.focus() } },
    },
    watch: {
        a: function(v) { if (v.length >= 3) { this.$refs.r2.focus(); } },
        b: function(v) { if (v.length >= 4) { this.$refs.r3.focus(); } },
    },
});
