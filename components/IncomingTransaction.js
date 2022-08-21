import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { INCOMING_TRANSACTIONS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const IncomingTransaction = () => {
  return (
    <View className="my-2">
      <Text className="mx-4 tracking-widest text-lg text-white font-bold capitalize">
        recent transactions
      </Text>
      <View className="mt-2 mx-4">
        {INCOMING_TRANSACTIONS.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </View>
    </View>
  );
};

const Card = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex flex-row items-center justify-between my-1.5 py-2 bg-slate-800 px-2 rounded-lg"
    >
      <View
        className={`w-8 h-8 items-center justify-center rounded-full ${
          item.type === "exp" ? "bg-teal-200" : "bg-cyan-200"
        }`}
      >
        <Feather
          name={item.type === "inc" ? "plus" : "minus"}
          size={20}
          color={item.type === "exp" ? "#115e59" : "#155e75"}
        />
      </View>
      <View style={{ flex: 1 }} className="mx-2">
        <Text className="text-gray-300 text-base font-bold capitalize">
          {`${item.type === "inc" ? `From ${item.label}` : `To ${item.label}`}`}
        </Text>
        <Text className="text-gray-400 text-sm font-semibold capitalize">
          {item.date}
        </Text>
      </View>
      <Text
        className={`text-base font-semibold capitalize ${
          item.type === "inc" ? "text-green-400" : "text-red-600"
        }`}
      >
        {`${item.type === "inc" ? `+ ${item.amount}` : `- ${item.amount}`}`}
      </Text>
    </TouchableOpacity>
  );
};

export default IncomingTransaction;
