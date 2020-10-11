<template>
	<view class="news-footer">
		<text class="iconfont iconfanhui" @click="goback"></text>
		<text class="iconfont iconhebingxingzhuang" @click="goComments">
      <text class="num">{{extraInfo.comments}}</text>
    </text>
		<text class="iconfont icondianzan">
      <text class="num">{{extraInfo.popularity}}</text>
    </text>
		<text class="iconfont iconshoucang" :class="{favorite:favorite}" @click="shoucang"></text>
		<text class="iconfont iconshangchuan" @click="share"></text>
	</view>
</template>

<script>
	export default {
    props: ['newsObj'],
		data() {
			return {
        favorite: false,
        extraInfo: {}
			};
		},
    async mounted() {
      const res =await this.$API(`/story-extra/${this.newsObj.id}`)
      this.extraInfo = res
      //判断当前文章是否被收藏
      let favoriteArr = uni.getStorageSync('favorite') ||'[]'
      favoriteArr = JSON.parse(favoriteArr)
      if(favoriteArr.length > 0){
        favoriteArr.some(item=>{
          item.id === this.newsObj.id ? this.favorite = true : null
          return item.id== this.newsObj.id //结束循环
        })
      }
    },
    methods:{
      goback() {
        uni.navigateBack()
      },
      goComments() {
        uni.navigateTo({
          url: `/pages/comments/comments?id=${this.newsObj.id}`
        })
      },
      shoucang() {
        let favoriteArr = uni.getStorageSync('favorite') ||'[]'
        favoriteArr = JSON.parse(favoriteArr)
        if(!this.favorite){
          //没有收藏
          const newsObj ={
            id: this.newsObj.id,
            title: this.newsObj.title,
            images: this.newsObj.images
          }
          favoriteArr.unshift(newsObj)
          uni.setStorageSync('favorite', JSON.stringify(favoriteArr))
          this.favorite = true
          uni.showToast({
            title: '收藏成功'
          })
        }else{
          const index = favoriteArr.findIndex( item => item.id == this.newsObj.id)
          favoriteArr.splice(index,1)
          uni.setStorageSync('favorite', JSON.stringify(favoriteArr))
          this.favorite = false
          uni.showToast({
            title: '已取消收藏'
          })
        }
      },
      share(){
        this.$emit('show')
      }
    }
	}
</script>

<style lang="scss">
  .news-footer{
    width: 100%;
    padding: 30rpx 0;
    display: flex;
    justify-content: space-around;
    background-color: #eee;
    position: fixed;
    left: 0;
    bottom: 0;
    .iconfanhui{
      padding-right: 40rpx;
      border-right: 4rpx solid #a0a0a0;
    }
    .iconfont{
      font-size: 46rpx;
      font-weight: bold;
      &.favorite{
        color: #F0AD4E;
      }
      .num{
        font-size: 24rpx;
        margin-left: 4rpx;
        vertical-align: super;
        font-weight: 400;
      }
    }
  }
</style>
