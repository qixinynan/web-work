<script setup>
import UserBar from './UserBar.vue'
import Panel from './Panel.vue'
import { getDetail } from '@/api/api';
import { onMounted, ref, computed, getCurrentInstance, nextTick } from 'vue'
import { useRoute } from 'vue-router';
import { openDownloadUrl } from '@/utils/appRedirect';

const detail = ref({
  price: 0,
  nickName: '',
  userHeadUrl: '',
  backgroundPic: '',
  logisticsType: '',
  tags: '',
  content: '',
  collectionNum: 0,
  likeNum: 0,
  wantNum: 0,
  address: '',
  signUserPictureList: [],
  pictureList: []
})

const pid = ref('')

const loading = ref(true)
const error = ref(null)

const logisticsText = computed(() => {
  const isFress = detail.value.freight == 0 ? true : false;
  if (detail.value.logisticsType === '1') return '自提'
  if (detail.value.logisticsType === '2') return isFress ? "包邮" : "到付"
  return ''
})
const showAABadge = computed(() => detail.value.payType === 2)

function convertToChineseUnit(number) {
  const units = ["京", "兆", "亿", "万", ""]
  const bases = [1e16, 1e12, 1e8, 1e4, 1]

  for (let i = 0; i < units.length; i++) {
    if (Math.abs(number) >= bases[i]) {
      return formatNumber(number / bases[i]) + units[i]
    }
  }

  return number.toString()
}

function formatNumber(n) {
  return Number(n.toFixed(2)).toString()
}

const templateStyle = ref("")
const text = ref("")
const textRef = ref(null)

import t1 from "@/assets/imgs/home/t1.png";
import t2 from "@/assets/imgs/home/t2.png";
import t3 from "@/assets/imgs/home/t3.png";

const imgMap = {
  "template-1": t1,
  "template-2": t2,
  "template-3": t3
};

const getImg = () => {
  return imgMap[templateStyle.value] || null;
};

onMounted(async () => {
  try {
    const route = useRoute()
    pid.value = route.query.pid
    console.log(pid.value);
    const res = await getDetail(pid.value)
    detail.value = res.data || undefined
    console.log("dd,", detail.value);
    loading.value = false
    if (!(detail.value.pictureList[0])) {
      console.log(12111, detail.value.content);
      text.value = detail.value.content
      console.log("ref", textRef.value);
      nextTick(() => {
        const el = textRef.value
        const lineHeight = parseFloat(getComputedStyle(el).lineHeight)
        const lines = Math.round(el.scrollHeight / lineHeight)
        console.log('当前显示了行数：', lines)
        if (lines == 1) templateStyle.value = "template-1"
        else if (lines == 2) templateStyle.value = "template-2"
        else templateStyle.value = "template-3"
      })
    }

    // Remove the global click handler
    // window.onclick = openDownloadUrl;

    if (detail.value == undefined) {
      error.value = "页面不存在"
    }
  } catch (e) {
    console.error('接口请求失败', e)
    error.value = e
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <div class="view">
    <template v-if="loading">
      <!-- <p>加载中...</p> -->
    </template>
    <template v-else-if="error">
      <p style="text-align: center;margin-top: 20px;">{{ error }}</p>
    </template>
    <template v-else>
      <UserBar :name="detail.nickName" :head="detail.userHeadUrl" v-app-download />
      <div class="content">
        <div class="cover" :class="templateStyle" v-app-download>
          <img v-if="detail.pictureList[0]" class="cover-img" :src="detail.pictureList[0]" />
          <div ref="textRef" v-if="text" class="text">
            {{ text }}</div>
          <img v-if="getImg()" class="icon" :src="getImg()"></img>
        </div>
        <div class="info">
          <div class="base-info">
            <div class="price">
              <img src="@/assets/imgs/detail/price.png" width="28px" />
              <div class="price-text">￥{{ Number(detail.price).toFixed(2) }}</div>
              <div class="price-deviery">{{ logisticsText }}</div>
              <img v-if="showAABadge" width="23px" src="@/assets/imgs/detail/AA.png" />
            </div>
            <div class="want">
              {{ detail.browseNum || 0 }}浏览/{{ detail.wantNum || 0 }}想要
            </div>
          </div>
          <div class="position">
            <img width="13.5px" src="@/assets/imgs/detail/图标.png" />
            {{ detail.address || '未知位置' }}
          </div>
          <div class="tags" v-if="detail.tags != ''">
            <span class="tag" v-for="tag in detail.tags?.split(',')" :key="tag">#{{ tag }}</span>
          </div>
          <div class="article">
            {{ detail.content }}
          </div>
        </div>
      </div>
      <div class="control">
        <div class="control-item" v-app-download>
          <img width="20px" src="@/assets/imgs/detail/share.png" />
          <span>分享</span>
        </div>
        <div class="control-item" v-app-download>
          <img width="20px" src="@/assets/imgs/detail/want.png" />
          <span>我想要</span>
        </div>
        <div class="control-item" v-app-download>
          <img width="20px" src="@/assets/imgs/detail/star.png" />
          <span>{{ convertToChineseUnit(detail.collectionNum) }}</span>
        </div>
        <div class="control-item" v-app-download>
          <img width="20px" src="@/assets/imgs/detail/like.png" />
          <span>{{ convertToChineseUnit(detail.likeNum) }}</span>
        </div>
        <div class="control-item" v-if="detail.type == 4" v-app-download>
          <img width="20px" src="@/assets/imgs/detail/follow.png" />
          <span>{{ (detail.signUserPictureList || []).length }}/{{ detail.personNum }}</span>
        </div>
      </div>
      <div class="gradient-mask" v-app-download>
        <div class="open-app-btn" v-app-download>
          <img width="30px" src="@/assets/imgs/icon.png">
          打开App，探索更多精彩内容
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped>
.view {}

.content {
  padding: 0 13px 13px 13px;
  margin-bottom: 80px;
}

.text {
  color: black;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  overflow-wrap: break-word;
  margin: 0 30px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
}

.icon {
  width: 60px;
  position: absolute;
}

.gradient-mask {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 130px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  /* pointer-events: none; */
  border-radius: 0 0 10px 10px;
  z-index: 100;
}

.open-app-btn {
  background-color: #AE41FC;
  /* width: 280px; */
  width: fit-content;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 40px;
  gap: 20px;
  padding: 10px 30px;
}


.control {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.32);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: white;
}

.control-item {
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  align-items: center;
  font-size: 10px;
  gap: 5px;
}

.article {
  font-size: 10px;
  margin-top: 10px;
  color: #010101;
  line-height: 20px;
  /* font-weight: 600; */
}

.tags {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #8b69e7;
  font-size: 13px;
  margin-top: 10px;
  /* font-weight: bold; */
}

.position {
  padding: 3px 5px;
  color: #999999;
  background-color: #fafafa;
  font-size: 11px;
  border-radius: 5px;
  margin-top: 15px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
}

.base-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.price {
  display: flex;
  align-items: center;
}

.price-text {
  font-size: 14px;
  font-family: Microsoft YaHei, sans-serif;
  font-weight: bold;
  /* font-family: sans-serif; */
  margin-left: 5px;
  color: #FE4643;
  padding-right: 5px;
}

.price-deviery {
  font-size: 11px;
  padding-left: 5px;
  padding-right: 5px;
  border-left: solid rgb(173, 173, 173) 1px;
}

.want {
  font-size: 9px;
  color: #999999;
}

.cover {
  width: 100%;
  aspect-ratio: 1/1;
  position: relative;
  object-fit: cover;
  border-radius: 10px;
}

.cover-img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  object-fit: cover;
}

.cover-mark {
  position: absolute;
  right: 10px;
  top: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.521);
  padding: 2px;
  font-size: 14px;
  border-radius: 3px;
}
</style>