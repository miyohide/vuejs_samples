const vm = new Vue({
    el: "#app",
    data: {
        a: 30,
    },
    created: function() {
        setInterval(() => {
            this.a--;
        }, 1000);
    },
    watch: {
        a: function(v) {
            if (v <= 0) {
                document.location = "/";    
            }
        }
    },
});
