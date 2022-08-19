import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const BalanceCard = () => {
  return (
    <View className="bg-white mx-4 p-3 rounded-md shadow-lg my-3">
      <View className="flex flex-row items-center justify-between mb-1">
        <Text className="text-gray-600 capitalize text-base">your balance</Text>
        <View className="bg-green-300 px-2 py-0.5 rounded-full">
          <Text className="tracking-widest text-xs font-bold text-green-700">
            + 6,21%
          </Text>
        </View>
      </View>
      <Text className="tracking-widest text-xl font-bold">$1,000,000.00</Text>
      <View className="mt-3 flex flex-row justify-center">
        <ActionButton
          icon={"add"}
          text={"add fund"}
          bgColor={"#60a5fa"}
          textColor={"#1d4ed8"}
        />
        <View className="mx-1" />
        <ActionButton
          icon={"ios-arrow-down"}
          text={"withdraw"}
          bgColor={"#d1d5db"}
          textColor={"#6b7280"}
        />
      </View>
      <Text className="mt-2">
        <Text className="text-gray-400 text-xs font-semibold capitalize">
          This is not the total sum of amount balance
        </Text>
      </Text>
    </View>
  );
};

const ActionButton = ({ icon, onPress, text, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row justify-center py-2 rounded-md bg-red-700`}
      activeOpacity={0.7}
      style={{ flex: 1, backgroundColor: bgColor }}
    >
      <Ionicons name={icon} size={20} color={textColor} />
      <View className="mx-0.5" />
      <Text style={{ color: textColor }} className="text-sm capitalize">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default BalanceCard;
