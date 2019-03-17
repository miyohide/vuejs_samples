const vm = new Vue({
    el: "#app",
    data: {good: 0, bad: 0},
    // created https://jp.vuejs.org/v2/api/#created
    created: function () {
        // vm.$once https://jp.vuejs.org/v2/api/#vm-once
        this.$once("foo", function(e) { this[e.target.dataset.key] += 1; });
    },
    methods: {
        a: function (e) {
            // vm.$emit https://jp.vuejs.org/v2/api/#vm-emit
            this.$emit("foo", e);
        },
    },
});
