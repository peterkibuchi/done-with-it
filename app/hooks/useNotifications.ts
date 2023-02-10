import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";
import { Platform } from "react-native";

import { expoPushTokensApi } from "../api";
import { routes } from "../config";
import { navigate } from "../navigation/rootNavigation";
import { logger } from "../utils";

export default function useNotifications() {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationReceivedListener(() => {
      navigate(routes.ACCOUNT_TAB_NAV, {});
    });
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const { data: pushToken } = await Notifications.getExpoPushTokenAsync();
      await expoPushTokensApi.register(pushToken);
    } catch (error) {
      logger.log(new Error("Error getting push token"));
    }

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };
}
