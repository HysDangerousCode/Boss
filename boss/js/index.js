const index = new Vue({
    el: "#index",
    data: {
        cartegories: []
    },
    created: () => {
        // const that = this;
        // 首页分类接口
        // 请根据您的本地服务器接口修改port值
        var port=5500;
        fetch(`http://127.0.0.1:${port}/api/test/index.json`).then((res) => {
            return res.json();
        }).then((data) => {
            index.cartegories = data;
            // that.cartegories = data;
        });
    }
});