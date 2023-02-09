import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";

import { AuthContext, authStorage } from "./app/auth";
import { OfflineNotice } from "./app/components";
import {
  AppNavigator,
  AuthNavigator,
  navigationTheme,
  rootNavigation,
} from "./app/navigation";

export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const currentUser = await authStorage.getUser();
    if (currentUser) setUser(currentUser);
  };

  const handleLoadingError = () => {
    throw new Error("App loading error");
  };

  const handleLoadingFinish = () => setAppIsReady(true);

  if (!appIsReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={handleLoadingError}
        onFinish={handleLoadingFinish}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer
        ref={rootNavigation.navigationRef}
        theme={navigationTheme}
      >
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
