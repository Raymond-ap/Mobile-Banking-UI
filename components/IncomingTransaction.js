import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IncomingTransaction = () => {
  return (
    <View className="my-2">
      <Text className="mx-4 tracking-widest text-lg text-white font-bold capitalize">
        recent transactions
      </Text>
      <View className="mt-2 mx-4">
        <Card />
      </View>
    </View>
  );
};

const Card = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex flex-row items-center justify-between my-1.5 py-2"
    >
      <View className="w-9 h-9 items-center justify-center rounded-full bg-green-300">
        <Ionicons name="add-sharp" size={25} color="#1e40af" />
      </View>
      <View style={{ flex: 1 }} className="mx-2">
        <Text className="text-gray-300 text-base font-bold capitalize">
          From: Ibrahim
        </Text>
        <Text className="text-gray-400 text-sm font-semibold capitalize">
          From: Ibrahim
        </Text>
      </View>
      <Text className="text-green-400 text-base font-semibold capitalize">
        From: Ibrahim
      </Text>
    </TouchableOpacity>
  );
};

export default IncomingTransaction;
