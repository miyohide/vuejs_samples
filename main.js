const vm = new Vue({
    el: "#app",
    data: {
        s: 1.0,
        x: 0,
        y: 0,
        a: 0,
        c: "#ADFF2F",
        b: 64
    },
    computed: {
        transform: function() {
            return `scale(${this.s}) translate(${this.x}px, ${this.y}px) rotate(${this.a}deg)`
        }
    }
});
