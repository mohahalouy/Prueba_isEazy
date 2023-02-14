<template>
  <section class="send-message">
    <input type="text" autocomplete="off" v-model="message"  @keyup.enter="sendMessage">
    <svg @click="sendMessage" class="cursor-pointer" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"
         width="40px" height="40px" :class="{ 'opacity-50': message === '' }" style="fill: rgb(13, 140, 250);">
      <path
          d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/>
    </svg>
  </section>
</template>

<script>
import {ref} from "vue";
import {useAppStore} from "../stores/app";

export default {
  name: "sendMessage",
  setup() {
    let message = ref('')
    const {addMessage} = useAppStore();

    const sendMessage = () => {
      if (message.value.trim() != '') {
        const fecha = new Date()

        const fechaFormateada = fecha.getDay() + " " + fecha.toLocaleString('default', {month: 'short'}) + " " + fecha.getFullYear() + ' / ' + fecha.getHours() + ':' + fecha.getMinutes();

        let objectMessage = {
          text: message.value,
          hora: fechaFormateada,
          tipo: "chatAlumno"
        }

        addMessage(objectMessage)

        message.value = ""
      }
    }

    return {
      message,
      sendMessage
    }
  }
}
</script>

<style scoped>

.send-message {
  position: absolute;
  bottom: 0;
  border-top: 2px solid #e1e2e3;
  width: 100%;
  padding: 30px;
  display: flex;
  place-items: center;
  gap: 10px;
  background: white;
  height: 110px;
}

.send-message input {
  width: 100%;
  border-radius: 25px;
  background-color: #f8f8f8;
  border: 2px solid #e5e5e5
}

.send-message input[type='text']:focus {
  box-shadow: none;
}

</style>