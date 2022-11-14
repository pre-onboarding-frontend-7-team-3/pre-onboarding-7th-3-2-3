import clientAPI from "./client";

const AuthAPI = {
  login: async (authInputs) => {
    const { data } = await clientAPI.post("/signup", authInputs);
    return data;
  },
};

export default AuthAPI;
