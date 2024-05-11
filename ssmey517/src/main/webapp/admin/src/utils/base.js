const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmey517/",
            name: "ssmey517",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmey517/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高质量阅读微信小程序"
        } 
    }
}
export default base
