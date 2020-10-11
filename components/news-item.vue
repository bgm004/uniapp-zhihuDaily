<template>
  <navigator class="news" hover-class="none" :url="'/pages/news/news?id=' + news.id">
    <view class="new-info">
      <text class="news-title">{{news.title}}</text>
        <text class="news-hint">{{news.hint || news.display_date}}</text>
      </view>
    <image class="news-img" :src="news.images[0]" mode="aspectFill"></image>
  </navigator>
</template>

<script>
	export default {
    props: ['news'],
		data() {
			return {
			}
		},
    mounted() {
      
    }
	}
</script>

<style lang="scss">
  .news{
    width: 100%;
    margin: 66rpx 0;
    display: flex;
    justify-content: space-between;
    .new-info{
      padding: 0 30rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .news-title{
        font-size: 36rpx;
      }
      .news-hint{
        font-size: 24rpx;
        color: #C0C0C0;
      }
    }
    .news-img{
      width: 160rpx;
      height: 160rpx;
      margin-right: 30rpx;
      border-radius: 8rpx;
      flex-shrink:0;
    }
  }
</style>
