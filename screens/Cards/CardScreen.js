import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { GlobalHeader } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { TABS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

export default function CardScreen() {
  const navigation = useNavigation();
  const [activTab, setActivTab] = React.useState(0);

  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <GlobalHeader
        title={"cards"}
        onPress={() => navigation.navigate("Home")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="my-2 mx-4 bg-slate-800 rounded-lg flex flex-row items-center">
          {TABS.slice(0, 2).map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setActivTab(index)}
                activeOpacity={0.9}
                key={index}
                style={{ flex: 1 }}
                className={`${
                  activTab === index && "bg-slate-500"
                } rounded-lg py-2 w-full items-center justify-center`}
              >
                <Text
                  className={`text-base tracking-wider text-gray-500 capitalize ${
                    activTab === index && "text-white"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {activTab === 0 ? <PaycheckCard /> : <BusinessCard />}
      </ScrollView>
    </SafeAreaView>
  );
}

const PaycheckCard = () => {
  const cardsArray = [1, 2, 3, 4, 5, 6];
  return (
    <View className="my-2 ">
      <Text className="mx-4 text-base tracking-wider text-white capitalize">
        paycheck cards
      </Text>
      <View className="py-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cardsArray}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <CreditCard />}
        />
      </View>
      <View className="my-2 mx-4">
        <Text className="text-lbaseg tracking-wider text-white capitalize">
          card controls
        </Text>
        <ActionCard
          title={"Lock your card"}
          subTitle={"Lock the transactions on your card"}
          icon={"chevron-forward"}
          color={"blue"}
          onPress={() => {}}
        />
        <ActionCard
          title={"Reset your pin"}
          subTitle={"Reset your pin to restore security"}
          icon={"key-outline"}
          color={"red"}
          onPress={() => {}}
        />
        <ActionCard
          title={"View card info"}
          subTitle={"View and copy your card information"}
          icon={"ios-card-outline"}
          color={"green"}
          onPress={() => {}}
        />
        <ActionCard
          title={"Add / withdraw funds"}
          subTitle={"Add and withdraw funds directly to/from this card"}
          icon={"ios-card-outline"}
          color={"yellow"}
          onPress={() => {}}
        />
        <ControlCard
          title={"Online payments"}
          subTitle={"Use this card for online payments"}
          icon={"finger-print-sharp"}
          color={"gray"}
          isOn={true}
        />
        <ControlCard
          title={"Cash transactions"}
          subTitle={"Use this card for physical payments"}
          icon={"phone-portrait-outline"}
          color={"indigo"}
          isOn={false}
        />
      </View>
    </View>
  );
};

const ActionCard = ({ title, subTitle, icon, color, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="my-1 flex flex-row items-center justify-between bg-slate-700 rounded-lg shadow-lg p-3"
    >
      <View
        className={`w-10 h-10 bg-${color}-200 items-center justify-center rounded-full`}
      >
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <View style={{ flex: 1 }} className="mx-2">
        <Text className="text-base font-bold tracking-wider text-white ">
          {title}
        </Text>
        <Text className="font-semibold text-xs text-gray-400 capitalize">
          {subTitle}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={1}>
        <Ionicons name="chevron-forward" size={20} color={"#9ca3af"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const ControlCard = ({ title, subTitle, icon, color, isOn }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="my-1 flex flex-row items-center justify-between bg-slate-700 rounded-lg shadow-lg p-3"
    >
      <View
        className={`w-10 h-10 bg-gray-200 items-center justify-center rounded-full`}
      >
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <View style={{ flex: 1 }} className="mx-2">
        <Text className="text-base font-bold tracking-wider text-white ">
          {title}
        </Text>
        <Text className="font-semibold text-xs text-gray-400 capitalize">
          {subTitle}
        </Text>
      </View>
      <View className="">
        <ToggleSwitch
          isOn={isOn}
          offColor="#dbeafe"
          onColor="#1d4ed8"
          size="small"
          onToggle={(isOn) => console.log("changed to : ", isOn)}
        />
      </View>
    </TouchableOpacity>
  );
};

const CreditCard = ({ item }) => {
  return (
    <Image
      resizeMode="cover"
      source={item}
      style={{ flex: 1 }}
      className="h-44 rounded-lg w-80 mx-1 bg-cyan-500 shadow-lg"
    />
  );
};

const BusinessCard = () => {
  return (
    <View className="my-2 mx-4 bg-slate-800 rounded-lg ">
      <Text className="text-base tracking-wider text-white capitalize">
        business
      </Text>
    </View>
  );
};
