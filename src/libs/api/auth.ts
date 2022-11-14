import clientAPI from "./client";

const AuthAPI = {
  login: async (authInputs) => {
    const { data } = await clientAPI.post("/login", authInputs);
    return data;
  },
};

export default AuthAPI;
