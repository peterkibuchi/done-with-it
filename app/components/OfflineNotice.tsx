import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";

import { colors } from "../config";
import AppText from "./AppText";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 100,
  },
  text: {
    color: colors.white,
  },
});
