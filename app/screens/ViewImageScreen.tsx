import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, View } from "react-native";

import { colors } from "../config";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={32} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={32}
        />
      </View>

      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
