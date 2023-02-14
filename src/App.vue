<template>
  <div class="app">
    <h1>Bienvenido Usuario</h1>
    <h2>Tareas pendientes:</h2>
    <TareasWrapper></TareasWrapper>
    <Chat></Chat>
  </div>
</template>
<script>
import TareasWrapper from "./components/TareasWrapper.vue";
import Chat from "./components/Chat.vue";

export default {
  components: {TareasWrapper, Chat},
}


</script>
<style scoped>
.app {
  position: relative;
}

</style>
