import instance from ".";

const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post("/auth/register", formData);
  return data;
};

const me = async () => {
  const { data } = await instance.get("/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/auth/users");
  return data;
};

export { login, register, me, getAllUsers, storeToken };
