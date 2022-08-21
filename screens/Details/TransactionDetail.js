import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalHeader } from "../../components";
import { Ionicons } from "@expo/vector-icons";

export default function TransactionDetail({ route }) {
  const listing = route.params.item;
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full bg-slate-900">
      <GlobalHeader onPress={() => navigation.goBack()} title={listing.type} />
      <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
        {listing.type.toLowerCase() === "subscription" ? (
          <SubscriptionView listing={listing} />
        ) : (
          <SpendingView listing={listing} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const SubscriptionView = ({ listing }) => {
  return (
    <View className="">
      <View className="my-3 bg-slate-800 p-3 rounded-lg">
        <Text className="text-base tracking-widest text-white font-semibold capitalize">
          current subscriptions
        </Text>
        <Text className="text-sm my-1 text-gray-300 capitalize">
          {`you've ${listing.list.length} ongoing subscriptions to these services`}
        </Text>
      </View>
      <Text className="text-base tracking-widest text-white font-semibold capitalize">
        subscriptions list
      </Text>
      <View className="my-2">
        {listing.list.map((item, index) => {
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
      onPress={() => navigation.navigate("ListingDetail", { item: item })}
      activeOpacity={0.9}
      className="my-1 py-2 px-2 rounded-lg bg-slate-800 w-full flex flex-row items-center justify-between"
    >
      <Image source={item.img} className="w-10 h-10 rounded-full" />
      <View className="mx-2" style={{ flex: 1 }}>
        <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize">
          {item.title}
        </Text>
        <Text className="text-sm text-gray-400 capitalize">yearly sub</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize mr-1">
          {item.amount}
        </Text>
        <Ionicons name="ios-arrow-forward" size={20} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

const SpendingView = ({ listing }) => {
  return <View className="my-2 bg-slate-800 p-3 rounded-lg"></View>;
};
