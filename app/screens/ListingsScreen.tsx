import { FlatList, StyleSheet, Text, View } from "react-native";

import { Card, Screen } from "../components";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quibusdam distinctio iure mollitia exercitationem eius accusantium delectus consequuntur laudantium adipisci incidunt minima dolores placeat, impedit provident inventore porro dolor labore, pariatur autem blanditiis quos sint! Distinctio expedita neque vitae obcaecati eius ullam numquam, soluta impedit error doloremque provident. Dolorum accusamus delectus porro dicta iure molestiae quos laboriosam ea numquam, cupiditate necessitatibus distinctio ratione vel natus et repellendus veritatis, cum soluta, maiores consequatur? Dicta sunt molestias consequuntur excepturi, animi rem esse odio! Harum id, perferendis reprehenderit distinctio nostrum saepe maiores esse! Amet perferendis, omnis corporis provident neque ab? Quisquam, quasi nulla.",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 20, backgroundColor: colors.extralight },
});
