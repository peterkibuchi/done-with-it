import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import { logger } from "../utils";

const key = "authToken";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log(new Error("Error storing auth token"));
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    logger.log(new Error("Error getting auth token"));
  }
};

const getUser = async () => {
  const authToken = await getToken();
  return authToken ? jwtDecode(authToken) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log(new Error("Error removing auth token"));
  }
};

export default { getToken, getUser, removeToken, storeToken };
