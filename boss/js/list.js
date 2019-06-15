const list = new Vue({
    el: "#list",
    data: {
        filters: [],
        jobs: []
    },
    created: () => {
        // 条件查询数据接口
        // 请根据您的本地服务器接口修改port值
        var port=5500;
        fetch(`http://127.0.0.1:${port}/api/test/filters.json`).then((res) => {
            return res.json();
        }).then((data) => {
            list.filters = data;
        });
        // 列表内容数据接口
        fetch(`http://127.0.0.1:${port}/api/test/jobs.json`).then((res) => {
            return res.json();
        }).then((data) => {
            list.jobs = data;
        });
    }
});
// 注：请根据本地服务器的端口修改port的值