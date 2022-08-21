import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { GlobalHeader } from "../../components";
import { useNavigation } from "@react-navigation/native";

export default function RequestScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <GlobalHeader
        title={"request"}
        onPress={() => navigation.navigate("Home")}
      />
    </SafeAreaView>
  );
}
