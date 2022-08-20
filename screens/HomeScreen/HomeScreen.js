import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { BalanceCard, SubscriptionHistory } from "../../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-slate-50">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />
        <SubscriptionHistory />
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <View className="px-4 py-2 bg-slate-50 flex flex-row items-center justify-between">
      <Text className="text-xl tracking-widest capitalize font-bold">Home</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          resizeMode="cover"
          source={require("../../assets/images/profile.jpg")}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>
    </View>
  );
};
