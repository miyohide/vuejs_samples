const vm = new Vue({
    el: "#app",
    data: {
        a: Math.floor(Math.random() * 10),
        b: Math.floor(Math.random() * 10),
    },
    methods: {
        c: function (e) {
            if (parseInt(window.prompt(`${this.a} + ${this.b}は？`)) != (this.a + this.b)) {
                e.preventDefault();
                alert("不正解");
            } else {
                e.preventDefault();
            }
        },
    },
});
