<template>
  <AdjuntarArchivo :index="index"></AdjuntarArchivo>
  <EnviarAdjunto :index="index"></EnviarAdjunto>
</template>

<script>
import AdjuntarArchivo from "./AdjuntarArchivo.vue";
import EnviarAdjunto from "./EnviarAdjunto.vue";

export default {
  name: "Tarea",
  components: {EnviarAdjunto, AdjuntarArchivo},
  props: ['index']
}
</script>

<style scoped>

</style>