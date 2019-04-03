const vm = new Vue({
    el: "#app",
    data: {
        a: "",
    },
    created: function() {
        this.reset();
    },
    watch: {
        a: function(v) {
            this.reset();
        }
    },
    methods: {
        reset: _.debounce(function () {
            document.location = "/"
        }, 1000 * 5),
    },
});
