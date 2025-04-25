<template>
  <div class="root">
    <template v-if="!notfound">
      <div class="top-bar">
        <div class="tb-app" v-app-download>
          <img width="40px" height="40px" src="@/assets/imgs/icon.png" alt="">
          <div class="tb-name">
            <span class="tbn-name">奇源 APP</span>
            <span class="tbn-desc">遇见另一个世界的你</span>
          </div>
        </div>
        <div class="tb-btn" v-app-download>打开看看</div>
      </div>
      <img class="bg" src="@/assets/imgs/home/背景.png">
      <div class="user-info">
        <div class="ui-content">
          <div class="base-info">
            <img class="avatar" :src="detail.userHeadUrl" v-app-download>
            <div class="name">
              <div class="username">{{ detail.nickName }}</div>
              <div class="code">奇源号：{{ detail.userPid }}</div>
            </div>
          </div>
          <div class="desc">
            {{ detail.signMessage }}
          </div>
          <div class="data">
            <div class="data-left">
              <div class="item" v-app-download>
                <div class="count">{{ detail.focusNum }}</div>
                <div class="label">关注</div>
              </div>
              <div class="item" v-app-download>
                <div class="count">{{ detail.fansNum }}</div>
                <div class="label">粉丝</div>
              </div>
              <div class="item" v-app-download>
                <div class="count">{{ detail.likeNum }}</div>
                <div class="label">获赞与收藏</div>
              </div>
            </div>
            <div class="data-right">
              <button class="follow-btn" v-app-download>
                <img width="12px" style="  filter: invert(1);
" src="@/assets/imgs/detail/关注.png">
                关注
              </button>
              <div class="msg-btn" v-app-download>
                <img width="12px" style="  filter: invert(1);
" src="@/assets/imgs/detail/关注.png">
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="posts">
        <div class="tabs">
          <div class="tab-row">
            <span class="tab active">发布</span>
            <span class="tab">参与</span>
            <span class="tab">收藏</span>
          </div>
          <div class="tab-row sub">
            <span class="tab active">全部</span>
            <span class="tab">供给</span>
            <span class="tab">需求</span>
            <span class="tab">活动</span>
            <span class="tab">内容</span>
          </div>
        </div>
        <div class="card-list">
          <CardItem v-for="item in detail.items" :key="item.id" :item="item" :nickName="detail.nickName"
            :fallback-avatar="detail.userHeadUrl" v-app-download />
        </div>
      </div>
      <div class="gradient-mask">
        <div class="open-app-btn" v-app-download>
          <img width="30px" src="@/assets/imgs/icon.png">
          打开App，探索更多精彩内容
        </div>
      </div>
    </template>
    <template v-else>
      <p style="text-align: center;margin-top: 20px;">页面不存在</p>
    </template>
  </div>
</template>
<script setup>
import { getHome } from '@/api/api';
import { onMounted, ref } from 'vue';
import CardItem from './CardItem.vue';
import { useRoute } from 'vue-router';
import { openDownloadUrl } from '@/utils/appRedirect';

const detail = ref({
})
const notfound = ref(false)
const pid = ref("")

onMounted(() => {
  const route = useRoute()
  pid.value = route.query.pid
  getHome(pid.value).then((res) => {
    detail.value = res.data || undefined;
    console.log(detail.value);
    if (detail.value == undefined) {
      notfound.value = true;
    }
  })
})
</script>
<style scoped>
.tabs {
  background: #fff;
  border-bottom: 1px solid #eee;
}

.tab-row {
  display: flex;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #898989;
  border-radius: 8px 8px 0 0;
  gap: 30px;
}

.tab-row.sub {
  font-size: 10px;
  color: #999;
  /* gap: 16px; */
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid #f0f0f0;
  gap: 0px;
}

.sub .tab {
  background-color: #EDEDED;
  padding: 5px 18px;
  border-radius: 2px;
}

.tab {
  cursor: default;
}

.tab.active {
  color: #000;
  font-weight: 600;
  position: relative;
}

.tab-row:not(.sub) .tab.active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 2px;
  background: #A570D9;
  border-radius: 2px;
}

.bg {
  position: absolute;
  width: 100%;
  z-index: -1;
}

.root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.data {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.data-left {
  display: flex;
  gap: 26px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count {
  color: white;
  font-size: 14px;
}

.label {
  color: white;
  font-size: 11px;
  margin-top: 5px;
  opacity: 0.8;
}

.data-right {
  display: flex;
  gap: 10px;
}

.follow-btn {
  background: rgba(255, 255, 255, 0);
  color: black;
  padding: 5px 12px;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid white;
  color: white;
  gap: 3px;
}

.msg-btn {
  background: rgba(255, 255, 255, 0);
  color: black;
  width: 30px;
  height: 30px;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid white;
  color: white;
}


.base-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.desc {
  font-size: 12px;
  color: white;
  margin-top: 21px;
}

.name {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 15px;
  color: white;
  font-weight: bold;
}

.code {
  font-size: 9px;
  color: #B1B4B9;
  margin-top: 10px;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: solid 1px #db8aff;
  padding: 2px;
  aspect-ratio: 1/1;
}

.user-info {
  margin-top: 100px;
  /* height: 268px; */
  margin: 100px 14px 20px 14px;
}

.posts {
  background-color: white;
  width: 100%;
  flex: 1;
  /* z-index: 0; */
  border-radius: 8px 8px 0 0;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 10px;
  background-color: #f3f3f3;
}

.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.cover {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
}

.cover-div {
  position: relative;
}

.corner {
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 4px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 4px 8px 0;
  align-items: center;
}

.price {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.37);
  font-size: 11px;
  border-radius: 10px;
  padding: 2px 6px;
  left: 7px;
  bottom: 7px;
  color: white;
}

.sale-tag {
  color: white;
  font-size: 10px;
  background-color: #ff5c8a;
  border-radius: 8px;
  padding: 2px 6px;
}

.title {
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  line-height: 1.3;
}

.author-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px 8px;
  color: #888;
}

.author-avatar {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.author-name {
  flex: 1;
  margin: 0 6px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.like {
  font-size: 10px;
}


.gradient-mask {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 130px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  pointer-events: none;
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

.top-bar {
  padding: 11px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tb-btn {
  background-color: #AE41FC;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  padding: 0px 20px;
  height: 30px;
  display: flex;
  align-items: center;
}

.tb-app {
  display: flex;
  gap: 10px;
}

.tb-name {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: space-around;
  padding: 5px 0;
}

.tbn-name {
  font-size: 14px;
}

.tbn-desc {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.553);
}
</style>