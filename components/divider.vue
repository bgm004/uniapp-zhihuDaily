<template>
	<view class="divider">
		<text class="date">{{date}}</text><view class="line"></view>
	</view>
</template>

<script>
	export default {
    props:['date'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
  .divider{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .date{
      padding-left: 30rpx;
      font-size: 25rpx;
      color: #dadada;
    }
    .line{
      width: 82%;
      border-top: 1px solid #eee;
    }
  }
</style>
