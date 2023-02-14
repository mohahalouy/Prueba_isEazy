<template>
  <div class="chat">
    <button @click="showUserModal = true" class="button-chat">
      Chat
      <div class="arrow-wrapper">
        <div class="arrow"></div>
      </div>
    </button>
  </div>

  <teleport to="body">
    <UserModal v-if="showUserModal" @close="showUserModal = false" class="modal"></UserModal>
  </teleport>
</template>

<script>
import {ref} from "vue";
import UserModal from "./UserModal.vue";

export default {
  name: "Chat",
  components: {UserModal},
  setup() {
    let showUserModal = ref(false)
    return {
      showUserModal
    }
  }
}
</script>

<style scoped>
.chat {
  position: absolute;
  top: 0;
  right: 0;
}

.button-chat {
  --primary-color: #645bff;
  --secondary-color: #fff;
  --hover-color: #111;
  --arrow-width: 10px;
  --arrow-stroke: 2px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
}

.button-chat .arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-chat .arrow {
  margin-top: 1px;
  width: var(--arrow-width);
  background: var(--primary-color);
  height: var(--arrow-stroke);
  position: relative;
  transition: 0.2s;
}

.button-chat .arrow::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  border: solid var(--secondary-color);
  border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
  display: inline-block;
  top: -3px;
  right: 3px;
  transition: 0.2s;
  padding: 3px;
  transform: rotate(-45deg);
}

.button-chat:hover {
  background-color: var(--hover-color);
}

.button-chat:hover .arrow {
  background: var(--secondary-color);
}

.button-chat:hover .arrow:before {
  right: 0;
}
</style>