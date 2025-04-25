<template>
  <div class="footer">
    <div class="footer-content">
      <div class="f-nav">
        <div class="f-nav-brand">
          <Logo></Logo>
          <div class="f-nav-contact">
            <img src="@/assets/mail.svg">
            service@sehedsoc.com
          </div>
        </div>
        <div class="f-nav-links">
          <RouterLink class="f-nav-link" active-class="green" to="/">Information</RouterLink>
          <RouterLink class="f-nav-link" active-class="green" to="/about">About Us</RouterLink>
          <RouterLink class="f-nav-link" active-class="green" to="/what-we-do">What We Do</RouterLink>
          <RouterLink class="f-nav-link" active-class="green" to="/contact">Contact Us</RouterLink>
        </div>
      </div>
      <div class="f-subscribe">
        <span class="f-subscribe-title">Subscribe to our Newsletter</span>
        <input type="email" class="f-subscribe-input" v-model="email" placeholder="Insert email here">
        <input type="submit" class="f-subscribe-submit" value="Subscribe" @click="handleSubscribe">
      </div>
    </div>
    <div class="copy-right d-flex justicy-content-center align-items-center">
      <span class="w-100 text-center">
        Copyright @2022-2024 Cash Go | All Rights Reserved
      </span>
    </div>
  </div>
</template>
<style>
.footer-content {
  /* min-height: 220px; */
  background-color: rgba(149, 255, 149, 0.28);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.f-nav {
  display: flex;
  justify-content: space-around;
}

.f-nav-contact {
  display: flex;
}

.f-subscribe {
  /* width: 300px; */
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding: 15px 40px;
  margin: 20px 10px;
  max-width: 420px;
  width: 100%;
  flex: 1;
}

.f-subscribe-title {
  color: white;
  font-size: 14px;
  /* font-weight: bold; */
}

.f-subscribe-input {
  outline: 0;
  border: none;
  border-radius: 4px;
  padding: 5px;
  color: #101010;
  margin-top: 15px;
  /* min-width: 220px; */
}

.f-subscribe-input::placeholder {
  color: rgba(136, 136, 136, 1);
}

.f-subscribe-submit {
  background-color: #FA8F14;
  border: none;
  padding: 6px 8px;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 20px;
}

.f-subscribe-submit:hover {
  background-color: #c06e11;
}

.f-nav-links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 40px;
}

.f-nav-link {
  text-decoration: none;
  color: #101010;
  font-weight: bold;
  padding: 6px;
  font-size: 14px;
}

.copy-right {
  background-color: #09AD09;
  font-size: 12px;
  color: white;
  height: 35px;
}

@media (min-width: 992px) {
  .footer-content {
    flex-direction: row;
  }

  .f-subscribe-submit {
    max-width: 100px;
  }

  .f-subscribe-input {
    max-width: 220px;
  }
}
</style>
<script setup>
import Logo from './Logo.vue';
import { RouterLink } from 'vue-router'
import { Notyf } from 'notyf';
import { ref } from 'vue';
import { subscribe } from '@/api/api';

const email = ref("")
const notyf = new Notyf({ position: { x: "center", y: "top" } });
const handleSubscribe = () => {
  if (!email.value) {
    notyf.error("Please fill in the form completely");
    return;
  }
  subscribe({ email: email.value }).then((res) => {
    if (res.code == 200) {
      notyf.success("Subscription successful")
    }
    else {
      notyf.error(res.msg)
    }
    email.value = "";
  })
}
</script>