import Constants from "expo-constants";
import { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface ScreenProps {
  children: ReactNode;
  style?: Object;
}

export default function Screen({ children, style }: ScreenProps) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
