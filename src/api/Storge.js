const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const removeToken = () => {
  localStorage.removeItem("token");
};

export { getToken, removeToken };
