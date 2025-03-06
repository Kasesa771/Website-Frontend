import { defineStore } from "pinia";
import { httpRequest } from "~/services";

export const useAuthStore = defineStore("authStore", () => {
  const user = useCookie<any>("user", {
    maxAge: 60 * 60,
    sameSite: "strict",
    httpOnly: false,
  });
  const loading = ref(false);
  const isAvailable = ref(true);
  const token = useCookie("token", {
    maxAge: 60 * 60,
    sameSite: "strict",
    httpOnly: false,
  });
  const error = ref();
  const setError = (data: any) => (error.value = data);
  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);
  const setLoading = (value: boolean) => (loading.value = value);
  const setIsAvailable = (value: boolean) => (isAvailable.value = value);
  const alert = useAlertStore();

  const login = (credentials: any) => {
    setLoading(true);
    httpRequest
      .post("/auth/login", credentials)
      .then((res) => {
        if (res.status == 200) {
          setToken(res.token);
          setUser(res.data);
          setLoading(false);
          navigateTo(`/dashboard`, { replace: true });
        } else {
          alert.error(res.message);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setToken();
        setUser();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const changePassword = (data: any) => {
    setLoading(true);
    httpRequest
      .post("/auth/change-password", data)
      .then((res: any) => {
        alert.success(res.message);
      })
      .catch((error: any) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const checkToken = async () => {
    setLoading(true);
    await httpRequest
      .get("/auth/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setToken();
        setUser();
        navigateTo(`/auth/login`, { replace: true });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const logout = () => {
    setUser();
    setToken();
    navigateTo(`/`, { replace: true });
  };

  return {
    user,
    loading,
    isAvailable,
    token,
    error,
    setError,
    setToken,
    setUser,
    setLoading,
    setIsAvailable,
    login,
    logout,
    checkToken,
    changePassword,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
