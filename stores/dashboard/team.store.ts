import { defineStore } from "pinia";
import { httpRequest } from "~/services";
import type { TeamData } from "~/types";

export const useTeamsStore = defineStore("teamsStore", () => {
  const loading = ref(false);
  const teams = ref<TeamData[]>([]);
  const selectedTeam = ref<TeamData>();
  const alert = useAlertStore();
  const mainStore = useMainStore();
  const setTeams = (data: any) => (teams.value = data);
  const setLoading = (value: boolean) => (loading.value = value);
  const setSelectedTeam = (value: any) => (selectedTeam.value = value);

  const getTeams = async () => {
    setLoading(true);
    await httpRequest
      .get("/teams/members")
      .then((res) => {
        setTeams(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const addTeam = async (data: any) => {
    setLoading(true);
    await httpRequest
      .post("/teams/add", data)
      .then((res) => {
        alert.success(res.message);
        mainStore.setAddModal(false);
        getTeams();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const updateTeam = async (data: any) => {
    setLoading(true);

    console.log(data);
    await httpRequest
      .put(`/teams/update/${data.id}`, data)
      .then((res) => {
        alert.success(res.message);
        mainStore.setUpdateModal(false);
        getTeams();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteTeam = async (id: number) => {
    setLoading(true);
    await httpRequest
      .delete(`/teams/delete/${id}`)
      .then((res) => {
        alert.success(res.message);
        mainStore.setDeleteModal(false);
        getTeams();
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  const getOneTeam = async (id: number) => {
    setLoading(true);
    await httpRequest
      .get(`/teams/member/${id}`)
      .then((res) => {
        setSelectedTeam(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    teams,
    getTeams,
    setTeams,
    setLoading,
    addTeam,
    updateTeam,
    deleteTeam,
    getOneTeam,
    selectedTeam,
    setSelectedTeam,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTeamsStore, import.meta.hot));
}
