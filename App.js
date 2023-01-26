import { StyleSheet, View } from "react-native";

import { Screen } from "./app/components";
import { ListingEditScreen } from "./app/screens";

export default function App() {
  return (
    // <View style={styles.container}>
    <ListingEditScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
