import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors } from "../config";

interface AppButtonProps {
  color?: "primary" | "secondary";
  onPress: () => void;
  title: string;
}

export default function AppButton({
  title,
  onPress,
  color = "primary",
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
