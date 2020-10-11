<template>
	<view class="user">
    <navigator hover-class="none" open-type="navigateBack">
      <text class="iconfont iconfanhui"></text>
    </navigator>
    <view class="user-info">
      <image class="avatar" src="@/static/images/avatar.jpg"></image>
      <text class="user-name">未登录</text>
    </view>
    <view class="list">
      <navigator class="shoucang" hover-class="none" url="/pages/favorite/favorite">
        我的收藏
        <text class="arrow">></text>
      </navigator>
      <view class="hot">
        <text>热门分类</text>
        <view class=" categorys">
          <navigator class="category-item" hover-class="none" url="/pages/section/section?id=2">
            瞎扯
          </navigator>
          <navigator class="category-item" hover-class="none" url="/pages/section/section?id=1">
            深夜惊奇
          </navigator>
          <navigator class="category-item" hover-class="none" url="/pages/section/section?id=35">
            小事
          </navigator>
          <navigator class="category-item" hover-class="none" url="/pages/section/section?id=29">
            大误
          </navigator>
          <navigator class="category-item" hover-class="none" url="/pages/section/section?id=116">
            奇怪的知识
          </navigator>
        </view>
      </view>
    </view>
    <view class="other">
      <view class="dark">
        <text class="iconfont iconyejianmoshi"></text>
        <text>夜间模式</text>
      </view>
      <view class="setting">
        <text class="iconfont iconshezhi"></text>
        <text>设置</text>
      </view>
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
  .user{
    width: 100%;
    box-sizing: border-box;
    /* #ifdef H5 */
    padding: 30rpx;
    /* #endif */
    /* #ifdef MP||APP-PLUS */
    padding: 80rpx 30rpx 30rpx 30rpx;
    /* #endif */
    .iconfanhui{
      font-size: 44rpx;
      font-weight: bold;
    }
    .user-info{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar{
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%;
      }
      .user-name{
        margin-top: 20rpx;
        font-weight: bold;
      }
    }
    .list{
      width: 100%;
      font-size: 38rpx;
      margin-top: 60rpx;
      .shoucang{
        border-top: 1px solid #eee;
        padding:30rpx 0;
        .arrow{
          position: absolute;
          right: 30rpx;
          font-weight: bold;
        }
      }
      .hot{
        border-top: 1px solid #eee;
        padding:30rpx 0;
        .categorys{
          border-top: 1px solid #eee;
          margin-top:30rpx;
          .category-item{
            display: inline-block;
            margin: 30rpx 30rpx 0 0;
            padding: 10rpx 20rpx;
            background-color: #eee;
            border-radius: 10rpx
          }
        }
      }
    }
    .other{
      display: flex;
      justify-content: space-around;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 60rpx;
      .dark{
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconyejianmoshi{
          font-size: 50rpx;
        }
      }
      .setting{
        display: flex;
        flex-direction: column;
        align-items: center;
        .iconshezhi{
          font-size: 50rpx;
        }
      }
    }
  }
</style>
