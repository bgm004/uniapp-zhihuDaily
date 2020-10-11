<template>
	<view class="content">
		<heade></heade>
      <uni-swiper-dot :info="info" :current="current" :mode="mode" :dotsStyles="dotsStyles">
        <swiper 
        class="swiper" 
        @change="change"
        :autoplay="autoplay" 
        :interval="3000" 
        :duration="1000" 
        :circular="true" 
        indicator-active-color="#FFF">
          <swiper-item v-for="item in info" :key="item.id">
            <navigator class="swiper-item" hover-class="none" :url="'/pages/news/news?id=' + item.id">
              <image class="swiper-img" :src="item.image" mode="aspectFill"></image>
              <view class="item-info">
                <text class="swiper-title">
                  {{item.title}}
                </text>
                <text class="swiper-author">
                  {{item.hint}}
                </text>
              </view>
              <view class="css-filter" :style="{backgroundImage:'linear-gradient(0,rgba('+item.image_hue+',1),rgba('+item.image_hue+',0.9),rgba('+item.image_hue+',0))'}"></view>
            </navigator>
          </swiper-item>
        </swiper>
      </uni-swiper-dot>
      <view class="news">
        <view class="latest">
          <news-item v-for="item in latest" :key="item.id" :news="item"></news-item>
        </view>
        <view class="beforeNews" v-for="item in beforeNews" :key="item.date">
          <divider :date="item.dateText"></divider>
          <news-item v-for="news in item.stories" :key="news.id" :news="news"></news-item>
        </view>
        <uni-load-more :status="more" iconType="circle" color="#66ccff" :contentText="text"></uni-load-more>
      </view>
	</view>
</template>

<script>
  import heade from '@/components/header.vue'
  import uniSwiperDot from "@/components/uni-swiper-dot.vue"
  import newsItem from '@/components/news-item.vue'
  import divider from '@/components/divider.vue'
  import dayjs from '@/utils/dayjs.min.js'
  import uniLoadMore from "@/components/uni-load-more.vue"
  import colorRgb from '@/utils/colorRgb.js'
  
	export default {
    components:{
      heade,
      uniSwiperDot,
      newsItem,
      divider,
      uniLoadMore
    },
		data() {
			return {
        current: 0,
        autoplay:true,
        mode: 'round',
        dotsStyles: {
          backgroundColor:'#666',
          selectedBackgroundColor: '#fff',
          border:'#666',
          selectedBorder: '#fff'
        },
				info: [],
        latest:[],
        beforeNews:[],
        date:dayjs().format('YYYYMMDD'),
        more:'more',
        text:{
          contentdown: '',
          contentrefresh: '',
          contentnomore: '没有更多了'
        }
			}
		},
		onLoad() {
      uni.showLoading({
          title: '加载中'
      })
      this.getLatest()
		},
    onHide () {
      this.autoplay = false
    },
    onShow () {
      this.autoplay = true
    },
    async onReachBottom () {
      this.more = 'loading'
      const Hour = new Date().getHours()
      if(Hour>=0&&Hour<=7){
        const date2 = dayjs(this.date).subtract(1, 'day').format('YYYYMMDD')
        const res = await this.$API(`/news/before/${date2}`)
        res.dateText = dayjs(res.date).format("M") +"月"+dayjs(res.date).format("D")+"日"
        this.beforeNews = [...this.beforeNews,res]
        //请求成功则改变获取旧日报的date
        if(res.stories) {
          this.date = dayjs(this.date).subtract(1, 'day').format('YYYYMMDD')
          this.more = 'more'
        }
      }else{
        const res = await this.$API(`/news/before/${this.date}`)
        res.dateText = dayjs(res.date).format("M") +"月"+dayjs(res.date).format("D")+"日"
        this.beforeNews = [...this.beforeNews,res]
        //请求成功则改变获取旧日报的date
        if(res.stories) {
          this.date = dayjs(this.date).subtract(1, 'day').format('YYYYMMDD')
          this.more = 'more'
        }
      }
    },
    onPullDownRefresh () {
      this.getLatest()
    },
		methods: {
      change(e) {
        this.current = e.detail.current
      },
      async getLatest () {
        const res = await this.$API('/news/latest')
        res.top_stories.forEach((item)=>{
          item.image_hue = item.image_hue.replace('0x','#').colorRgb()
          })
        this.info = res.top_stories
        this.latest = res.stories
        uni.hideLoading()
        uni.stopPullDownRefresh()
      }
		}
	}
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
    .swiper{
      margin-top: 150rpx;
      width: 100%;
      height: 740rpx;
      background-color: #3F536E;
      .swiper-item{
        width: 100%;
        height: 100%;
        .swiper-img{
          width: 100%;
          height: 100%;
        }
        .css-filter{
          position: absolute;
          bottom: 0;
          height: 50%;
          width: 100%;
        }
        .item-info{
          width: 100%;
          height: 200rpx;
          color: #d2d2d2;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: absolute;
          z-index: 3;
          left: 0;
          bottom: 0;
          box-sizing: border-box;
          padding-left: 30rpx;
          .swiper-title{
            padding-right: 40rpx;
            box-sizing: border-box;
            font-size: 45rpx;
          }
          .swiper-author{
            font-size: 33rpx;
            color: #9e9e9e;
            box-sizing: border-box;
            padding-bottom: 15rpx;
          }
        }
      }
    }
  }
</style>
