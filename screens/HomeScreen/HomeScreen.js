import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { BalanceCard, SubscriptionHistory } from "../../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-slate-100">
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
    <View className="px-4 py-2 bg-slate-100 flex flex-row items-center justify-between">
      <Text className="text-xl tracking-widest capitalize font-bold">Home</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <View className="w-10 h-10 rounded-full bg-red-300" />
      </TouchableOpacity>
    </View>
  );
};
