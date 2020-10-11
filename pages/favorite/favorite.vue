<template>
	<view style="width: 100%;">
    <view class="header">
      <navigator open-type="navigateBack" hover-class="none" class="iconfont iconfanhui"></navigator>
      <view class="title">收藏</view>
    </view>
    <view class="list">
      <uni-swipe-action>
        <uni-swipe-action-item :show="isOpened" 
        :auto-close="false" 
        :right-options="options" 
        @click="delNews(index)" 
        v-for="(item,index) in favoriteArr" :key="item.id"
        >
          <news-item class="news-item" :news="item"></news-item>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
	</view>
</template>

<script>
  import newsItem from '@/components/news-item.vue'
  
	export default {
    components: {
      newsItem
    },
		data() {
			return {
        isOpened:'none',
        favoriteArr: [],
				options: [
          {
            text: '删除',
            style: {
              backgroundColor: '#dd524d',
            }
          }
        ]
			};
		},
    onLoad (){
      let favorite = uni.getStorageSync('favorite') ||'[]'
      this.favoriteArr = JSON.parse(favorite)
    },
    methods:{
      delNews (index) {
          this.isOpened = 'none';
          setTimeout(()=>{
            this.favoriteArr.splice(index,1)
            uni.setStorageSync('favorite', JSON.stringify(this.favoriteArr))
          },100)
      }
    }
	}
</script>

<style lang="scss">
  .header{
    position: fixed;
    z-index: 4;
    left: 0;
    top: 0;
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
  .list{
    width: 100%;
    /* #ifdef H5 */
    margin-top: 80rpx;
    /* #endif */
    /* #ifdef MP||APP-PLUS */
    margin-top: 130rpx;
    /* #endif */
    .news-item{
      width: 100%;
      margin: 66rpx 0 0 0;
      .news{
        /* #ifdef MP||APP-PLUS */
        margin: 0!important;
        /* #endif */
      }
    }
  }
</style>
