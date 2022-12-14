import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransactionDetail, ListingDetail } from "./screens";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={TabNavigator} />
          <Stack.Screen name='TransactionDetail' component={TransactionDetail} />
          <Stack.Screen name='ListingDetail' component={ListingDetail} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={"#0f172a"}
      />
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
