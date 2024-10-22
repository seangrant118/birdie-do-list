import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

// Change
const port = 5191;
const api = `http://localhost:${port}/`;

export const loginApi = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error)
  }
};

export const registerApi = async (username: string, email: string, password: string) => {
    try {
      const data = await axios.post<UserProfileToken>(api + "account/register", {
        username: username,
        email: email,
        password: password,
      });
      return data;
    } catch (error) {
      handleError(error)
    }
  };