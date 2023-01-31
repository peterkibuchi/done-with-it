import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AccountScreen, ListingEditScreen, ListingsScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={ListingsScreen} />
    <Tab.Screen name="ListingsEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>;
}
