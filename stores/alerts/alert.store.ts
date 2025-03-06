import { defineStore } from "pinia";
export const useAlertStore = defineStore("alertStore", () => {
  const toast = useToast();
  const success = (message: string, timeout: number = 5000) => {
    if (
      message.includes("<br>") ||
      message.includes("<br/>") ||
      message.includes("<br />")
    ) {
      timeout = 0;
    }
    toast.add({
      icon: "i-heroicons-check-circle-16-solid",
      title: "Success",
      color: "green",
      description: message,
      timeout,
    });
  };
  const error = (message: string, timeout: number = 5000) => {
    //check if message contains <br> or <br/> or <br /> and set timeout to 0
    message = message ?? "Error Occured on our end";
    if (
      message.includes("<br>") ||
      message.includes("<br/>") ||
      message.includes("<br />")
    ) {
      timeout = 0;
    }
    toast.add({
      icon: "i-heroicons-exclamation-circle-16-solid",
      title: "Error",
      color: "red",
      description: message,
      timeout,
    });
  };
  const warning = (message: string, timeout: number = 5000) => {
    if (
      message.includes("<br>") ||
      message.includes("<br/>") ||
      message.includes("<br />")
    ) {
      timeout = 0;
    }
    toast.add({
      icon: "i-heroicons-check-circle",
      title: "Warning",
      color: "amber",
      description: message,
      timeout,
    });
  };

  return { success, error, warning };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertStore, import.meta.hot));
}
