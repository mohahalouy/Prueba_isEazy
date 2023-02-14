<template>
  <template v-if="tareasPendientes.length">
    <div v-for="(value, key) in tareasPendientes" class="tareas-pendientes-box">
      <div>{{ value.name }}</div>
      <div class="adjuntar-box">
        <Tarea :index="key"></Tarea>
      </div>
    </div>
  </template>
  <template v-else>
    No hay tareas pendientes disponibles
  </template>
</template>

<script>
import {useAppStore} from "../stores/app";
import Tarea from "./Tarea.vue";

export default {
  name: "TareasWrapper",
  components: {Tarea},
  computed: {
    tareasPendientes() {
      return useAppStore().getTareasPendientes;
    },
  },
}
</script>

<style scoped>

.tareas-pendientes-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>