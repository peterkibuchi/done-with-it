import Constants from "expo-constants";

const devApiUrl = "http://192.168.100.10:9000/api" as const;
const prodApiUrl = process.env.PROD_API_URL;

const settings = {
  dev: {
    apiUrl: devApiUrl,
  },
  staging: {
    apiUrl: prodApiUrl,
  },
  prod: {
    apiUrl: prodApiUrl,
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
