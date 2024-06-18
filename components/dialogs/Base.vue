<template>
  <dialog ref="dialog" class="dialog-base" @click="handleClick">
    <slot />
  </dialog>
</template>

<script setup>
const dialogStore = useDialogStore();

// refs
const dialog = ref();

// Props
const props = defineProps({
  name: String,
});

// Open via store subscription!
dialogStore.$subscribe((mut, state) => {
  if (!!state.isOpen[props.name]) {
    dialog.value?.showModal();
  } else {
    dialog.value?.close();
  }
});

// Click handler (close via outside click)
const handleClick = (event) => {
  if (event.target.tagName == "DIALOG") {
    dialogStore.close(props.name);
  }
};
</script>

<style scoped>
.dialog-base {
  @apply text-white p-4 bg-zinc-800 rounded backdrop:backdrop-brightness-50 backdrop:backdrop-grayscale;
}
</style>
