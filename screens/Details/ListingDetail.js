import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalHeader } from "../../components";

export default function ListingDetail({ route }) {
  const listing = route.params.item;
  const navigation = useNavigation();
  console.log(listing);

  return (
    <SafeAreaView className="h-full bg-slate-900">
      <GlobalHeader
        onPress={() => navigation.goBack()}
        title={listing.amount}
      />
      <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
        <View className="my-2 items-center justify-center">
          <Text className="mt-3 text-white text-xl capitalize">
            {listing.title}
          </Text>
          <Text className="text-gray-400 text-base capitalize">
            yearly subscription
          </Text>
        </View>
        {/*  */}
        <View className="my-1 py-2 px-2 rounded-lg bg-slate-800 w-full flex flex-row items-center justify-between">
          <View style={{ flex: 1 }}>
            <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize">
              Paid amount
            </Text>
            <Text className="text-sm text-gray-400 capitalize">
              View subscriptions value
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize mr-1">
              {listing.amount}
            </Text>
          </View>
        </View>
        <Card
          title={"start date"}
          subTitle={"Date of first payment"}
          date={listing.startDate}
        />
        <Card
          title={"end date"}
          subTitle={"End of subscription date"}
          date={listing.endDate}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const Card = ({ title, date, subTitle }) => {
  return (
    <View className="my-1 py-2 px-2 rounded-lg bg-slate-800 w-full flex flex-row items-center justify-between">
      <View className="mx-2" style={{ flex: 1 }}>
        <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize">
          {title}
        </Text>
        <Text className="text-sm text-gray-400">{subTitle}</Text>
      </View>
      <View className="flex flex-row items-center">
        <Text className="text-base tracking-widest text-gray-200 font-semibold capitalize mr-1">
          {date}
        </Text>
      </View>
    </View>
  );
};
