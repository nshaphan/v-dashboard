import { ref } from "vue";

const isOpen = ref(false);

function useSidebar() {
  return {
    isOpen,
  };
}

export default useSidebar;
