import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import listingsApi from "../api/listings";
import {
  ActivityIndicator,
  AppButton,
  AppText,
  Card,
  Screen,
} from "../components";
import colors from "../config/colors";
import { useApi } from "../hooks";
import routes from "../navigation/routes";

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    hasError,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {hasError && (
        <View style={styles.error}>
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton title="retry" onPress={loadListings} />
        </View>
      )}

      <ActivityIndicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            title={item.title}
            subtitle={`$${item.price}`}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  error: {
    paddingVertical: 20,
    alignItems: "center",
  },
  screen: {
    padding: 20,
    backgroundColor: colors.extralight,
  },
});
