import { StyleSheet } from "react-native";

import AppText from "../AppText";

interface ErrorMessageProps {
  error: string | undefined;
  visible: boolean | undefined;
}

export default function ErrorMessage({ error, visible }: ErrorMessageProps) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
