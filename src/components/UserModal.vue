<template>
  <div class="modal">
    <header class="header">
      <div>
        <p class="font-bold text-lg">Comentarios</p>
      </div>
      <svg @click="$emit('close')" height="18px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1"
           viewBox="0 0 512 512"
           width="18px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" fill="#0d8cfa"
           xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4
         L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1
         c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1
          c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
      </svg>
    </header>
    <div class="container-chat">
      <section class="chat-conversation">
        <MensajesWrapper></MensajesWrapper>
      </section>
      <SendMessage></SendMessage>
    </div>

  </div>
</template>

<script>

import MensajesWrapper from "./MensajesWrapper.vue";
import SendMessage from "./sendMessage.vue";

export default {
  name: "UserModal",
  components: {MensajesWrapper, SendMessage},
  emits: ['close'],
}

</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow-y: hidden;
}

.header {
  display: flex;
  width: 100%;
  align-items: center;
  height: fit-content;
  justify-content: center;
  border-bottom: 4px solid black;
  position: relative;
  padding: 15px;
}

header > svg {
  position: absolute;
  right: 15px;
  cursor: pointer;
}

.container-chat {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-conversation {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 160px);
  overflow-y: auto;
}

</style>