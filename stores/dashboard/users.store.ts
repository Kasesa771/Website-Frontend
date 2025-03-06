import { defineStore } from "pinia";
import { httpRequest } from "~/services";

export const useUsersStore = defineStore("teamsStore", () => {
    const loading = ref(false);
    const teams = ref<any[]>([]);
    const selectedUser = ref<any>();
    const alert = useAlertStore();
    const mainStore = useMainStore();
    const setUsers = (data: any) => (teams.value = data);
    const setLoading = (value: boolean) => (loading.value = value);
    const setSelectedUser = (value: any) => (selectedUser.value = value);

    const getUsers = async () => {
        setLoading(true);
        await httpRequest
            .get("/teams/members")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const addUser = async (data: any) => {
        setLoading(true);
        await httpRequest
            .post("/teams/add", data)
            .then((res) => {
                alert.success(res.message);
                mainStore.setAddModal(false);
                getUsers();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const updateUser = async (data: any) => {
        setLoading(true);

        console.log(data);
        await httpRequest
            .put(`/teams/update/${data.id}`, data)
            .then((res) => {
                alert.success(res.message);
                mainStore.setUpdateModal(false);
                getUsers();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    const deleteUser = async (id: number) => {
        setLoading(true);
        await httpRequest
            .delete(`/teams/delete/${id}`)
            .then((res) => {
                alert.success(res.message);
                mainStore.setDeleteModal(false);
                getUsers();
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };
    const getOneUser = async (id: number) => {
        setLoading(true);
        await httpRequest
            .get(`/teams/member/${id}`)
            .then((res) => {
                setSelectedUser(res.data);
            })
            .catch((error) => { })
            .finally(() => {
                setLoading(false);
            });
    };

    return {
        loading,
        teams,
        getUsers,
        setUsers,
        setLoading,
        addUser,
        updateUser,
        deleteUser,
        getOneUser,
        selectedUser,
        setSelectedUser,
    };
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
