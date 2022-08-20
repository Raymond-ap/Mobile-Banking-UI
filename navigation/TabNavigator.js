import React from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, PayScreen, CardScreen, RequestScreen } from "../screens";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Pay") {
            iconName = focused ? "account-cash" : "account-cash-outline";
          } else if (route.name === "Request") {
            iconName = focused
              ? "account-arrow-left"
              : "account-arrow-left-outline";
          } else if (route.name === "Card") {
            iconName = focused ? "credit-card" : "credit-card-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={20} color={color} />
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "transparent",
          height: 65,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
          borderTopWidth: 1,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="Request" component={RequestScreen} />
      <Tab.Screen name="Card" component={CardScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
