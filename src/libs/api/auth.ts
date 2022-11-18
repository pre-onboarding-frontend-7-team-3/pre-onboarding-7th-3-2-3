import clientAPI from "./client";

const AuthAPI = {
  login: async (authInputs) => {
    const { data } = await clientAPI.post("/users/signin", authInputs);
    return data;
  },
};

export default AuthAPI;
