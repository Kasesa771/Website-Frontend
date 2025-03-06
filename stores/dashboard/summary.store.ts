import { defineStore } from "pinia";
import { httpRequest } from "~/services";

export const useSummaryStore = defineStore("summaryStore", () => {
  const summary = ref();
  const loading = ref(false);
  const setLoading = (data: boolean) => (loading.value = data);

  const setSummary = (value: any) => (summary.value = value);
  const getDashboardSummary = async () => {
    setLoading(true);
    await httpRequest
      .get("/dashboard/summary")
      .then((res) => {
        setSummary(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    summary,
    setSummary,
    loading,
    setLoading,
    getDashboardSummary,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSummaryStore, import.meta.hot));
}
