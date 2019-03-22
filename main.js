const vm = new Vue({
    el: "#app",
    data: {
        a: "",
        b: "",
    },
    watch: {
        a: function (v) {
            this.a = v.replace(/[A-Za-z0-9]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) + 65248)});
        },
        b: function(v) {
            this.b = v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) { return String.fromCharCode(s.charCodeAt(0) - 65248) })
        },
    }
});
