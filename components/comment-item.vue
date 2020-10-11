<template>
	<view class="comment">
    <view class="info">
      <image class="avatar" :src="comment.avatar"></image>
      <text class="nickName">{{comment.author}}</text>
      <text class="iconfont icongengduo"></text>
    </view>
    <text class="content">
      {{comment.content}}
      <text class="reply_to" :class="{open:status}" v-if="comment.reply_to">
        <text v-if="comment.reply_to.status===0">// {{comment.reply_to.author+': '+comment.reply_to.content}}</text>
        <text v-else-if="comment.reply_to.status===1">{{comment.reply_to.error_msg}}</text>
      </text>
    </text>
    <view class="other">
      <text>{{comment.time|timeformat}}</text>
      <view class="more" v-if="comment.reply_to&&comment.reply_to.status!==1" @click="openReply">
        <text v-if="comment.reply_to.content.length>30">{{status?'· 收起':'· 展开全文'}}</text>
      </view>
      <view class="likes">
        <text class="num">{{comment.likes}}</text>
        <text class="iconfont icondianzan"></text>
        <text class="iconfont iconhuifutubiaox"></text>
      </view>
    </view>
	</view>
</template>

<script>
  import dayjs from '@/utils/dayjs.min.js'
  
	export default {
    props: ['comment'],
		data() {
			return {
				status: false
			};
		},
    filters:{
      timeformat(time){
        return dayjs(time*1000).format('MM-DD HH:mm')
      }
    },
    methods: {
      openReply() {
        this.status = !this.status
      }
    }
	}
</script>

<style lang="scss">
  .comment{
    padding-top: 40rpx;
    border-bottom: 2rpx solid #F1F1F1;
    .info{
      position: relative;
      display: flex;
      align-items: center;
      .avatar{
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
        margin-left: 30rpx;
      }
      .nickName{
        font-size: 32rpx;
        font-weight: bold;
        margin-left: 30rpx;
      }
      .icongengduo{
        font-size: 44rpx;
        position: absolute;
        right: 30rpx;
      }
    }
    .content{
      font-size: 32rpx;
      margin:0 30rpx 0 130rpx;
      display: inline-block;
      word-break: break-all;
      .reply_to{
        display: block;
        color: #b9b9b9;
        height: 68rpx;
        line-height: 34rpx;
        overflow: hidden;
        &.open{
          height: auto;
        }
      }
    }
    .other{
      font-size: 32rpx;
      margin:30rpx 30rpx 30rpx 130rpx;
      color: #b9b9b9;
      .more{
        display: inline-block;
        margin-left: 10rpx;
      }
      .likes{
        display: inline-block;
        float: right;
        margin-right: 30rpx;
        .icondianzan{
          font-weight: bold;
        }
        .iconhuifutubiaox{
          font-size: 30rpx;
          margin-left: 30rpx;
        }
      }
    }
  }
</style>
