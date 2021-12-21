/* eslint-disable no-undef */
export function clearToken() {
  return localStorage.removeItem("token");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getUser() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : undefined;
}

export function setTokenUser(token) {
  return localStorage.setItem("token", token);
}

export function setUser(user) {
  return localStorage.setItem("user", JSON.stringify(user));
}

export function setUserStorage(user) {
  localStorage.setItem("token", user.token);
}

export function clearStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("typeParam");
  localStorage.removeItem("is_new_notif");
}
