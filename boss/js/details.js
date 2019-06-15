const details = new Vue({
    el: "#details",
    data: {
        job: {}
    },
    created: function() {
        // const that = this;
        // 请根据您的本地服务器接口修改port值
        var port=5500;
        fetch(`http://127.0.0.1:${port}/api/test/details.json`).then(function(res) {
            return res.json();
        }).then(function(data) {
            details.job = data;
            console.log(data);
        });
    }
});