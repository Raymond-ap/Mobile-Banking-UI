import { View, Text, FlatList } from "react-native";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";
import { SUBSCRIPTIONS } from "../constants";

const SubscriptionHistory = () => {
  return (
    <View className="my-2">
      <Text className="mx-4 tracking-widest text-lg text-white font-bold">
        Subscription & spendings
      </Text>
      <View className="mt-2 ml-3">
        <FlatList
          data={SUBSCRIPTIONS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <SubscriptionCard item={item} />}
        />
      </View>
    </View>
  );
};

export default SubscriptionHistory;
