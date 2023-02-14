<template>
  <button class="cssbuttons-io-button" @click="enviarAdjunto()">
    Enviar
    <div class="icon">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"></path>
      </svg>
    </div>
  </button>
  <ModalErrorEnvio v-if="errorModalVisible" @close="errorModalVisible = false"/>
  <ModalCorrectoEnvio v-if="correctoModalVisible" @close="correctoModalVisible = false"/>
</template>

<script>
import {useAppStore} from "../stores/app";
import {ref} from "vue";
import ModalErrorEnvio from "./ModalErrorEnvio.vue";
import ModalCorrectoEnvio from "./ModalCorrectoEnvio.vue";

export default {
  name: "EnviarAdjunto",
  components: {ModalCorrectoEnvio, ModalErrorEnvio},
  props: ['index'],
  setup(props) {
    const {deleteTarea, getTareasPendientes: tareasPendientes, addMessage} = useAppStore();
    const errorModalVisible = ref(false);
    const correctoModalVisible = ref(false);

    //tamaño del archivo
    function sizeFile(size) {
      const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
      let i = 0;
      while (size > 900) {
        size /= 1024;
        i++;
      }
      return (size.toFixed(2) + ' ' + fSExt[i]);
    }

    function enviarAdjunto() {
      if (!tareasPendientes[props.index].entregado) {
        errorModalVisible.value = true;
      } else {
        correctoModalVisible.value = true;
        let file = document.querySelectorAll(`[id='${props.index}']`)[0].files[0]

        let exactSize = sizeFile(file.size)

        const fecha = new Date()

        const fechaFormateada = fecha.getDay() + " " + fecha.toLocaleString('default', {month: 'short'}) + " " + fecha.getFullYear() + ' / ' + fecha.getHours() + ':' + fecha.getMinutes();

        let objectFile = {
          version: "VERSION 1",
          nombre: file.name,
          tipoArchivo: file.type + ' (' + exactSize + ")",
          hora: fechaFormateada,
          tipo: "archivo"
        }

        addMessage(objectFile)
        deleteTarea(props.index);
      }
    }

    return {
      enviarAdjunto,
      errorModalVisible,
      correctoModalVisible
    }
  }
}
</script>

<style scoped>

.cssbuttons-io-button {
  background: #A370F0;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 3.3em;
  margin: 10px auto;
}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #7b52b9;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #7b52b9;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}

</style>