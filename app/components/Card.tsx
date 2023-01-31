import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

export default function Card({
  image,
  title = "Title",
  subtitle = "Subtitle",
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});
