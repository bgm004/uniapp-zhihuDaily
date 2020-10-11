<template>
	<view>
    <skeleton :loading="loading" banner title :row="12" animate >
      <view class="news-content">
        <rich-text :nodes="detail.body"></rich-text>
        <collection v-if="detail.section" :info="detail"></collection>
      </view>
    </skeleton>
    <news-footer v-if="detail.id" :newsObj="detail" @show="showShareCard"></news-footer>
    <wyb-popup ref="popup" type="bottom" height="400" width="500" radius="20" bgColor="rgba(255.255.255,0)">
        <view class="popup-content">
            <share-card></share-card>
        </view>
    </wyb-popup>
	</view>
</template>

<script>
  import colorRgb from '@/utils/colorRgb.js'
  import newsFooter from '@/components/news-footer.vue'
  import collection from '@/components/collection.vue'
  import skeleton from '@/components/skeleton.vue'
  import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
  import shareCard from '@/components/share-card.vue'
  
	export default {
    components: {
      newsFooter,
      collection,
      skeleton,
      wybPopup,
      shareCard
    },
		data() {
			return {
			detail: {},
      loading :true
			}
		},
    async onLoad (option) {
      const res = await this.$API(`/news/${option.id}`)
      res.image_hue = res.image_hue.replace('0x','#').colorRgb()
      res.body = res.body.replace(/figure|figure|figcaption|figcaption/g,'span')
      res.body = res.body.replace(/<div\sclass="img-place-holder"><\/div>/i,`<div class="img-place-holder"><img class="thumbnail" src="${res.image}"/><div class="css-lalnj93" style="background-image:linear-gradient(0,rgba(${res.image_hue},1),rgba(${res.image_hue},0.9),rgba(${res.image_hue},0))"></div></div><span class="headline-title">${res.title}</span><span class="source">${res.image_source||''}</span>`)
      this.detail = res
    },
    methods: {
      showShareCard () {
        this.$refs.popup.show()
      }
    },
    watch: {
      detail() {
        this.loading = false
      }
    }
	}
</script>

<style lang="scss">
  .news-content{
    margin-bottom: 140rpx;
  }
</style>
