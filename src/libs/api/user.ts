import clientAPI from "./client";

export const getUserDetail = (userId: string) => {
  return clientAPI.get(`/users/${userId}`);
};

export const getUserAllAccount = (userId: string) => {
  return clientAPI.get(`/accounts?userId=${userId}`);
};

export const getUserSetting = (userId: string) => {
  return clientAPI.get(`/userSetting/${userId}`);
};

export const editUserName = (userId: string, editValue: string) => {
  return clientAPI.patch(`/users/${userId}`, {
    name: editValue,
  });
};

export const getAllUserDetail = () => {
  return clientAPI.get(`/users`);
};
