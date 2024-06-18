import { defineStore } from "pinia";
import { ref } from "vue";

export const useDialogStore = defineStore("dialogs", () => {
  // default state
  const isOpen = ref({});

  const open = (name) => {
    console.log(`Opened ${name}`);
    isOpen.value[name] = true;
  };

  const close = (name) => {
    console.log(`Closed ${name}`);
    isOpen.value[name] = false;
  };

  return { isOpen, open, close };
});
