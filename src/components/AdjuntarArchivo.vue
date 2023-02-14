<template>
  <input type="file" @change="handleFileChange" name="file-1" :id="index"
         class="inputfile inputfile-1">
  <label :for="index">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
      <path
          d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
    </svg>
    <span class="file-name">{{ tareasPendientes[index].nombreAdjunto }}</span>
  </label>
</template>

<script>
import {useAppStore} from "../stores/app";

export default {
  name: "AdjuntarArchivo",
  props: ['index'],
  setup(props) {
    const {getTareasPendientes: tareasPendientes} = useAppStore();


    const handleFileChange = (event) => {
      tareasPendientes[props.index].entregado = true;
      const fileName = event.target.files[0].name;
      tareasPendientes[props.index].nombreAdjunto = fileName
    }


    return {
      handleFileChange,
      tareasPendientes
    }
  }
}
</script>

<style scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}


.inputfile-1 + label {
  color: #f1e5e6;
  background-color: #d3394c;
}

.inputfile + label {
  width: fit-content;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  place-items: center;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  margin: 0 auto;
}

.inputfile + label svg {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

.inputfile + label * {
  pointer-events: none;
}

</style>