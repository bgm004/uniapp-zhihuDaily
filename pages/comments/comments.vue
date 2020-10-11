<template>
	<view class="container">
		<view class="header">
		  <navigator open-type="navigateBack" hover-class="none" class="iconfont iconfanhui"></navigator>
		  <view class="title">{{info.comments}}条评论</view>
		</view>
    <view class="long-comments" v-if="info.long_comments !== 0">
      <text class="commentsNum">{{info.long_comments}}条长评</text>
      <comment-item v-for="item in longComments" :key="item.id" :comment="item"></comment-item>
    </view>
    <view class="short-comments" :class="{'no-long':info.long_comments === 0}" v-if="info.short_comments !== 0">
      <text class="commentsNum">{{info.short_comments}}条短评</text>
      <comment-item v-for="item in shortComments" :key="item.id" :comment="item"></comment-item>
    </view>
	</view>
</template>

<script>
  import commentItem from '@/components/comment-item.vue'
  
	export default {
    components: {
      commentItem
    },
		data() {
			return {
				info: {},
        id:'',
        longComments: [],
        shortComments: []
			};
		},
    async onLoad(option) {
      this.id = option.id
      const info =await this.$API(`/story-extra/${option.id}`)
      this.info = info
      if(info.comments !== 0) {
        this.getComments(option.id)
      }
    },
    async onReachBottom () {
      if(this.info.short_comments !== this.shortComments.length) {
        const index = this.shortComments.length - 1
        let res = null
        if(this.shortComments[index].id){
          res = await this.$API(`/story/${this.id}/short-comments/before/${this.shortComments[index].id}`)
        }
        this.shortComments = [...this.shortComments,...res.comments]
      }
    },
    methods:{
      async getComments(id){
        if(this.info.long_comments !== 0) {
          const res = await this.$API(`/story/${id}/long-comments`)
          this.longComments = [...res.comments]
        }
        if(this.info.short_comments !== 0) {
          const res = await this.$API(`/story/${id}/short-comments`)
          this.shortComments = [...res.comments]
        }
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
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
        padding:  0 30rpx;
        box-sizing: border-box;
      }
    }
    .long-comments{
      /* #ifdef H5 */
      margin-top: 110rpx;
      /* #endif */
      /* #ifdef MP||APP-PLUS */
      margin-top: 160rpx;
      /* #endif */
      .commentsNum{
        font-size: 32rpx;
        font-weight: bold;
        display: inline-block;
        margin: 30rpx 0 0 30rpx;
      }
    }
    .short-comments{
      &.no-long{
        /* #ifdef H5 */
        margin-top: 110rpx;
        /* #endif */
        /* #ifdef MP||APP-PLUS */
        margin-top: 160rpx;
        /* #endif */
      }
      .commentsNum{
        font-size: 32rpx;
        font-weight: bold;
        display: inline-block;
        margin: 30rpx 0 0 30rpx;
      }
    }
  }
</style>
