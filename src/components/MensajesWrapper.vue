<template>
  <div v-for="mensaje in conversacionChat" :class="mensaje.tipo">
    <template v-if="mensaje.tipo==='archivo'">
      <div>
        <p class="font-bold uppercase">{{ mensaje.version }}</p>
        <p class="font-bold azul-generico">{{ mensaje.nombre }}</p>
        <p>{{ mensaje.tipoArchivo }} {{ mensaje.hora }}</p>
      </div>
      <div>
        <a href="/notFound" @click.prevent>
          <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
            <path d="M0 0h48v48h-48z" fill="none"/>
            <path style="fill: #0d8cfa;"
                  d="M38.71 20.07c-1.36-6.88-7.43-12.07-14.71-12.07-5.78 0-10.79 3.28-13.3 8.07-6.01.65-10.7 5.74-10.7 11.93 0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zm-4.71 5.93l-10 10-10-10h6v-8h8v8h6z"/>
          </svg>
        </a>
      </div>
    </template>
    <template v-else-if="mensaje.tipo==='chatAlumno'">
      <div class="mensajeAlumno">
        <p class="font-semibold">{{ mensaje.text }}</p>
        <small class="text-xs">{{ mensaje.hora }}</small>
      </div>
      <div class="imgPerfil">
        <picture>
          <img class="w-11" src="/alumnPhoto.jpg">
        </picture>
      </div>
    </template>
    <template v-else-if="mensaje.tipo==='chatProfesor'">
      <div class="imgPerfil">
        <picture>
          <img class="w-11" src="/profesorPhoto.jpg">
        </picture>
      </div>
      <div class="mensajeProfesor">
        <p class="font-semibold">{{ mensaje.text }}</p>
        <small class="text-xs"> {{ mensaje.hora }}</small>
      </div>
    </template>
  </div>
</template>

<script>
import {useAppStore} from "../stores/app";

export default {
  name: "MensajesWrapper",
  setup() {
    const {getConversacionChat} = useAppStore();

    return {
      conversacionChat: getConversacionChat
    }
  }
}
</script>

<style scoped>

.azul-generico {
  color: #0d8cfa;
}

.archivo {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e1e2e3;
  padding: 20px;
}

.chatAlumno {
  border: 0px;
  align-self: end;
  display: flex;
  place-items: center;
  gap: 20px;
}

.chatProfesor {
  border: 0px;
  display: flex;
  place-items: center;
  gap: 20px;
}

.mensajeAlumno {
  background-color: #0d8cfa;
  color: white;
  width: fit-content;
  padding: 10px;
  position: relative;
}

.mensajeAlumno:after {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.mensajeAlumno:after {
  border-color: rgba(136, 183, 213, 0);
  border-left-color: #0d8cfa;
  border-width: 10px;
  margin-top: -10px;
}

.imgPerfil {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 38px;
  overflow: hidden;
  border-radius: 50%;
}

.imgPerfil img {
  width: auto;
  height: 100%;
}

.mensajeProfesor {
  background-color: #f8f8f8;
  color: black;
  max-width: 80%;
  padding: 10px;
  position: relative;
}

.mensajeProfesor:after {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.mensajeProfesor:after {
  border-color: rgba(136, 183, 213, 0);
  border-right-color: #f8f8f8;
  border-width: 10px;
  margin-top: -10px;
}

</style>