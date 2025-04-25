<template>
  <div>
    <TitleBar tag="Contact Us">CONTACT US</TitleBar>
    <div class="mt-5 content">
      <div>
        <CarouselContact class="carousel"></CarouselContact>
      </div>
      <div class="d-flex flex-column mail mx-auto">
        <h2 class="fs-5 text-black fw-bold">Send your mail here</h2>
        <div class="d-flex mail-input" style="justify-content: space-around;">
          <input class="input" placeholder="Name" v-model="contactInfo.customerName">
          <input type="email" class="input mt-2 mt-lg-0 ms-lg-2" placeholder="Email Address"
            v-model="contactInfo.email">
        </div>
        <textarea rows="3" placeholder="Message" type="text" class="input mt-2 w-100 textarea"
          v-model="contactInfo.message"></textarea>
        <button class="submit" @click="handleSubmit">Submit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import TitleBar from '@/components/TitleBar.vue';
import CarouselContact from '@/components/CarouselContact.vue';
import { saveContact } from '@/api/api';
import { reactive } from 'vue';
import { Notyf } from 'notyf';
const contactInfo = reactive({
  customerName: "",
  email: "",
  message: ""
})
const notyf = new Notyf({ position: { x: "center", y: "top" } });
const handleSubmit = () => {
  if (!contactInfo.customerName || !contactInfo.email || !contactInfo.message) {
    notyf.error("Please fill in the form completely")
    return
  }
  saveContact(contactInfo).then((res) => {
    if (res.code == 200) {
      notyf.success("Successfully sent")
    }
    else {
      notyf.error(res.msg)
    }
    contactInfo.customerName = "";
    contactInfo.email = "";
    contactInfo.message = "";
  })
}
</script>
<style scoped>
.carousel {
  width: 100%;
  padding: 0 10px;
}

.input {
  border: solid 1px #1c191929;
  border-radius: 6px;
  background-color: #3f373729;
  font-size: 14px;
  padding: 7px;
  resize: none;
}

.input:focus {
  outline: solid #1c1919aa 1px;

}

.input::placeholder {
  color: rgba(136, 136, 136, 1);
}

.textarea {
  flex: 1;
}

.mail {
  margin-top: 20px;
  width: 100%;
  max-width: 360px;
  padding: 5px;
}

.content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1000px;
  margin-bottom: 100px;
}

.submit {
  border: 2px solid rgba(9, 173, 9, 1);
  font-weight: bold;
  margin-top: 20px;
  color: rgba(9, 173, 9, 1);
  border-radius: 4px;
  background-color: transparent;
  margin-left: auto;
  font-size: 14px;
  padding: 4px 12px;
}

.submit:hover {
  border: 2px solid #2b762b;
  color: #2b762b;
}

.mail-input {
  flex-direction: column;
}

@media (min-width: 992px) {

  .mail-input {
    flex-direction: row;
  }

  .carousel {
    width: 426px;
    height: 300px;
  }

  .mail {
    padding: 0;
  }

  .content {
    flex-direction: row;
  }
}
</style>
