<template>
  <view class="card">
    <view class="card-item">
      <text class="iconfont iconweixin"></text>
      <text class="name">微信好友</text>
    </view>
    <view class="card-item">
      <text class="iconfont iconpengyouquan"></text>
      <text class="name">朋友圈</text>
    </view>
    <view class="card-item">
      <text class="iconfont iconqq"></text>
      <text class="name">QQ</text>
    </view>
    <view class="card-item">
      <text class="iconfont iconlianjie"></text>
      <text class="name">复制链接</text>
    </view>
    <view class="card-item">
      <text class="iconfont iconliulanqi"></text>
      <text class="name">浏览器打开</text>
    </view>
    <view class="card-item">
      <text class="iconfont icongengduo"></text>
      <text class="name">更多</text>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .card{
    background-color: #fff;
    padding: 30rpx 0;
    border-radius: 50rpx 50rpx 0 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-shrink:0;
    .card-item{
      width: 25%;
      display: flex;
      margin: 30rpx 0;
      flex-direction: column;
      align-items: center;
      .iconfont{
        font-size: 80rpx;
        color: #b9b9b9;
        &.iconweixin{
          color: #26b10d;
        }
        &.iconpengyouquan{
          color: #60be0b;
        }
        &.iconqq{
          color: #47a2ff;
        }
        &.icongengduo{
          background-color: #b9b9b9;
          border-radius: 50%;
          color: #fff;
        }
      }
      .name{
        font-size: 30rpx;
      }
    }
  }
</style>
