<template>
  <div class="menu">
    <div class="menu-title">
      DeckTracker<span class="menu-subtitle">.gg</span>
    </div>
    <div class="menu-right">
      <button class="btn" @click="handleClick">Test</button>
    </div>
  </div>
</template>

<script setup>
import { useDialogStore } from "@/stores/dialog";

const dialogStore = useDialogStore();

const handleClick = () => {
  dialogStore.open("auth");
};
</script>

<style scoped>
.menu {
  @apply bg-zinc-800 flex flex-row justify-between items-center;
}

.menu-title {
  @apply text-2xl py-3 px-3;
}

.menu-subtitle {
  @apply text-orange-400 text-xl;
}

.menu-right {
  @apply px-3;
}

.btn {
  @apply bg-orange-500 hover:bg-orange-700 py-2 px-4 rounded;
}
</style>
