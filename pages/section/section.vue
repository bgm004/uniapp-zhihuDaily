<template>
	<view class="container">
    <view class="header">
      <navigator open-type="navigateBack" hover-class="none" class="iconfont iconfanhui"></navigator>
      <view class="title">{{name}} · 合集</view>
    </view>
		<view class="news-list">
		  <news-item v-for="item in collection" :key="item.id" :news="item"></news-item>
		</view>
    <uni-load-more :status="more" iconType="circle" color="#66ccff" :contentText="text"></uni-load-more>
	</view>
</template>

<script>
  import newsItem from '@/components/news-item.vue'
  import uniLoadMore from "@/components/uni-load-more.vue"
  
	export default {
    components: {
      newsItem,
      uniLoadMore
    },
		data() {
			return {
        timestamp:'',
        name: '',
        id:'',
				collection: [],
        more:'more',
        text:{
          contentdown: '',
          contentrefresh: '',
          contentnomore: '没有更多了'
        }
			};
		},
    async onLoad (option) {
      const res = await this.$API(`/section/${option.id}`)
      this.id = option.id
      this.timestamp =  res.timestamp
      this.name = res.name
      this.collection = [...res.stories]
    },
    async onReachBottom () {
      this.more = 'loading'
      try{
        const res = await this.$API(`/section/${this.id}/before/${this.timestamp}`)
        this.more = 'more'
        this.timestamp =  res.timestamp
        this.collection = [...this.collection,...res.stories]
      }catch(error){
        this.more = 'more'
      }
    }
	}
</script>

<style lang="scss">
  .container{
    width: 100%;
    background-color: #FFF;
    .header{
      position: fixed;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      border-bottom: 3rpx solid #eee;
      box-sizing: border-box;
      background-color: #FFF;
      /* #ifdef H5 */
      padding: 30rpx;
      /* #endif */
      /* #ifdef MP||APP-PLUS */
      padding: 70rpx 30rpx 30rpx 30rpx;
      /* #endif */
      .iconfanhui{
        font-size: 40rpx;
        position: absolute;
        left: 30rpx;
        z-index: 5;
      }
      .title{
        font-size: 34rpx;
        text-align: center;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        padding:  0 30rpx;
        box-sizing: border-box;
      }
    }
    .news-list{
      /* #ifdef H5 */
      margin-top: 160rpx;
      /* #endif */
      /* #ifdef MP||APP-PLUS */
      margin-top: 200rpx;
      /* #endif */
    }
  }
</style>
