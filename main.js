const vm = new Vue({
    el: "#app",
    data: {answer: null},
    methods: {
        a: function (e) {
            // カスタムdata属性を読むのは HTMLElement.dataset
            // https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/dataset
            this.answer = e.target.dataset.v;
        },
    },
});
