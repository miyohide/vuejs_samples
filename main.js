const vm = new Vue({
    el: "#app",
    data: {
        v: "",
        s: [],
    },
    methods: {
        run: function () {
            if (this.v != "") {
                if (/\d+/.test(this.v)) {
                    this.s.push(this.v);
                } else {
                    const l = this.s.pop();
                    const r = this.s.pop();
                    this.s.push(eval(`${l}${this.v}${r}`));
                }
                this.v = "";
            }
        },
    },
});
