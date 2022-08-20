import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "" : str;
};

const SubscriptionCard = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="bg-slate-800 w-56 p-3 items-center shadow-lg rounded-md mx-1"
    >
      <Text className="text-sm font-bold capitalize text-gray-300 tracking-wider">
        {item.type}
      </Text>
      {item.type === "subscription" ? (
        <View className="my-3 flex flex-row items-center relative">
          {item.list.map((data, index) => {
            return (
              <Image
                resizeMode="cover"
                source={data.img}
                key={index}
                className={`w-9 h-9 rounded-full bg-gray-100 ${
                  index === 1 && "absolute left-4 z-20"
                } ${index === 2 && "z-50"}`}
              />
            );
          })}
        </View>
      ) : (
        <View className="my-3">
          <Text className="text-lg font-bold capitalize text-white tracking-wider">
            {item.amount}
          </Text>
        </View>
      )}
      <Text className="text-xs text-gray-400 font-bold capitalize">
        View & manage your {truncate(item.type, 6)}
      </Text>
    </TouchableOpacity>
  );
};

export default SubscriptionCard;
