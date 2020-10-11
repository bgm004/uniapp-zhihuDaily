<template>
  <view class="line">
    <navigator :url="'/pages/section/section?id=' + info.section.id" hover-class="none">
      <view class="collection" :style="{backgroundColor: 'rgb('+info.image_hue+')'}">
        <view class="box">
          <image class="cover" :src="info.image" mode="aspectFit"></image>
          <view class="desc">
            <text class="for">本文来自</text>
            <text class="name">{{info.section.name}} · 合集</text>
          </view>
        </view>
        <text class="arrow">></text>
      </view>
    </navigator>
  </view>
</template>

<script>
	export default {
    props:['info'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .line{
    width: 100%;
    margin-top: 20rpx;
    border-top: 4rpx solid #eee;
  }
  .collection{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-radius: 30rpx;
    margin: 40rpx 20rpx;
    .box{
      display: flex;
      .cover{
        width: 180rpx;
        height: 180rpx;
        border-radius: 10px;
        transform: rotate(15deg);
        transform-origin: left top;
      }
      .desc{
        padding-left: 20rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .for{
          font-size: 32rpx;
          color: #c5c5c5;
        }
        .name{
          font-size: 36rpx;
          color: #f1f1f1;
        }
  }
    }
    .arrow{
      color: #fff;
      font-size: 60rpx;
      font-weight: bold;
      padding-right: 30rpx;
      opacity: 0.2;
    }
  }
</style>
