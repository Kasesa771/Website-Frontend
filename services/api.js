export const httpRequest = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, body, multipart = false) => {
    const requestOptions = {
      method,
      headers: authHeader(url),
    };
    const config = useRuntimeConfig();
    const baseUrl = config.public.baseUrl;

    if (body && !multipart) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    if (body && multipart) {
      requestOptions.body = body;
    }

    return fetch(baseUrl + url, requestOptions).then(handleResponse, url);
  };
}

// Helper functions

function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { token } = useAuthStore();
  const isLoggedIn = token && token.trim() !== "";

  if (isLoggedIn) {
    return { Authorization: `${token}` };
  } else {
    return {};
  }
}

async function handleResponse(response, url) {
  const alertStore = useAlertStore();
  const isJson = response.headers
    ?.get("content-type")
    ?.includes("application/json");
  const data = isJson && response.status !== 204 ? await response.json() : null;

  if (!response.ok) {
    const { logout } = useAuthStore();
    if ([401, 403].includes(response.status)) {
      logout();
    } else if (response?.status === 404) {
      const message = data.message ?? "Entity not found";
      showError({
        statusCode: 404,
        message,
      });
    } else if (response?.status === 405) {
      console.log(url + " #This endpoint is not yet done");
      return Promise.reject(data);
    }

    alertStore.error(data.message);
    return Promise.reject(data);
  }

  return data;
}
