import { createStackNavigator } from "@react-navigation/stack";

import { routes } from "../config";
import { ListingDetailsScreen, ListingsScreen } from "../screens";

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      presentation="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />

      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
