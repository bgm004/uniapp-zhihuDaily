// 封装get请求
const baseUrl = "https://zhihu-daily-server.vercel.app/api"
export default (path)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: baseUrl+path,
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				uni.showToast({
					title: '获取数据失败'
				})
				reject(err)
			}
		})
	})
}