const vm = new Vue({
    el: "#app",
    data: {
        list: ["接客", "清潔感", "早さ", "雰囲気", "味", "値段", "空調"],
        index: 0,
        a: null,
        show: false,
        answers: [],
    },
    methods: {
        next: function (e) {
            this.answers.push(this.a);
            // _.delay https://lodash.com/docs/4.17.11#delay
            // 500ミリ秒待って処理を実行する
            _.delay(() => { this.index++; this.a = null;}, 500);
        },
    },
    // computed https://jp.vuejs.org/v2/api/#computed
    computed: {
        q: function () {
            // 現在のインデックスから配列の長さで割ったものを返す。
            // このため、どんなにインデックスの値が大きくても
            // 配列の長さを超えることはない（無限ループになるが）。
            return this.list[this.index % this.list.length];
        },
    },
});
