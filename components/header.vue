<template>
	<view class="header">
		<view class="left" @click="toHeader">
		  <view class="date">
		    <text class="day">{{day}}</text>
        <text class="month">{{month}}月</text>
		  </view>
		  <text class="title">
		    知乎日报
		  </text>
		</view>
    <navigator hover-class="none" url="/pages/user/user">
      <image class="avatar" src="../static/images/avatar.jpg"></image>
    </navigator>
	</view>
</template>

<script>
  import getMonth from '../utils/getMonth'
	export default {
		data() {
			return {
				day: new Date().getDate(),
        month:''
			};
		},
    created() {
      this.month = getMonth(new Date().getMonth())
    },
    methods: {
      toHeader () {
        uni.pageScrollTo({
            scrollTop: 0,
            duration: 200
        })
      }
    }
	}
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 150rpx;
    background-color: #FFF;
    box-sizing: border-box;
    /* #ifdef H5 */
    padding: 30rpx;
    /* #endif */
    /* #ifdef MP||APP-PLUS */
    padding: 80rpx 30rpx 30rpx 30rpx;
    /* #endif */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    .left{
      display: flex;
      align-items: center;
      .date{
        border-right: 3rpx solid #CCC;
        padding-right: 35rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .day{
          font-size: 40rpx;
          font-weight: bold;
        }
        .month{
          font-size: 25rpx;
        }
      }
      .title{
        font-size: 45rpx;
        margin-left: 35rpx;
      }
    }
    .avatar{
      width: 74rpx;
      height: 74rpx;
      border-radius: 50%;
    }
  }
</style>
