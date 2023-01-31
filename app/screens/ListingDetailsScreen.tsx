import { Image, StyleSheet, View } from "react-native";
import { AppText, ListItem } from "../components";

import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 20,
  },
});
