import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { AppText, ContactSellerForm, ListItem } from "../components";
import { colors } from "../config";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const { images, price, title } = listing;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={images[0].url}
        preview={{ uri: images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{`$${price}`}</AppText>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.png")}
            title="Tacitus Kilgore"
            subtitle="5 listings"
          />
        </View>

        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
