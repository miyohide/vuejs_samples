const vm = new Vue({
    el: "#app",
    data: {
        a: "",
    },
    methods: {
        g: function () {
            // Math.rand()は0以上1未満の数値を返す。これを大きな数値を掛けて
            // Math.floor()で整数化。36進数に変換してランダムな文字列を返す。
            // ある程度の文字列の長さが欲しいので、Math.random()にかける数を
            // 大きくして大きな数値を得るようにする。
            this.a = Math.floor(Math.random() * 100000000000000000).toString(36)
        }
    },
});
