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
  return (
    <View className="my-2 ">
      <Text className="mx-4 text-base tracking-wider text-white capitalize">
        paycheck cards
      </Text>
      <View className="py-2 mx-4">
        <Image
          source={require("../../assets/images/card.png")}
          resizeMode="contain"
          style={{ flex: 1 }}
          className="h-44 rounded-lg w-80 bg-slate-700 shadow-lg"
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
          rightIcon="chevron-forward"
          onPress={() => {}}
        />
        <ActionCard
          title={"Reset your pin"}
          subTitle={"Reset your pin to restore security"}
          icon={"key-outline"}
          color={"red"}
          rightIcon="chevron-forward"
          onPress={() => {}}
        />
        <ActionCard
          title={"View card info"}
          subTitle={"View and copy your card information"}
          icon={"ios-card-outline"}
          color={"green"}
          rightIcon="chevron-forward"
          onPress={() => {}}
        />
        <ActionCard
          title={"Add / withdraw funds"}
          subTitle={"Add and withdraw funds directly to/from this card"}
          icon={"ios-card-outline"}
          color={"yellow"}
          rightIcon="chevron-forward"
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

const ActionCard = ({ title, subTitle, icon, color, onPress, rightIcon }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="my-1 flex flex-row items-center justify-between bg-slate-700 rounded-lg shadow-lg p-3"
    >
      {icon && (
        <View
          className={`w-10 h-10 bg-${color}-200 items-center justify-center rounded-full`}
        >
          <Ionicons name={icon} size={20} color={color} />
        </View>
      )}
      <View style={{ flex: 1 }} className={`${icon && "mx-2"}`}>
        <Text className="text-base font-bold tracking-wider text-white ">
          {title}
        </Text>
        {subTitle && (
          <Text className="font-semibold text-xs text-gray-400 capitalize">
            {subTitle}
          </Text>
        )}
      </View>
      <TouchableOpacity activeOpacity={1}>
        <Ionicons name={rightIcon} size={20} color={"#9ca3af"} />
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

const BusinessCard = () => {
  const [step, setStep] = React.useState(0);
  return (
    <View className="my-2 mx-4 ">
      <Text className="text-base tracking-wider text-white capitalize">
        Business
      </Text>
      {step === 0 ? (
        <View className="py-2">
          <View className="h-44 rounded-lg w-full bg-slate-700 shadow-lg items-center justify-center">
            <TouchableOpacity
              onPress={() => setStep(1)}
              className="w-11 h-11 bg-gray-200 rounded-full items-center justify-center"
            >
              <Ionicons name="add" size={30} color={"#0f172a"} />
            </TouchableOpacity>
            <Text className="my-2 text-sm text-gray-300 font-semibold">
              Order your card now
            </Text>
          </View>
        </View>
      ) : (
        <CreateCard />
      )}
    </View>
  );
};

const CreateCard = () => {
  const cardColors = ["blue", "red", "white", "green", "orange", "black"];
  const [selectedColor, setSelectedColor] = React.useState(cardColors[4]);
  return (
    <View className="my-2">
      <Image
        source={require("../../assets/images/card.png")}
        resizeMode="contain"
        style={{ backgroundColor: selectedColor }}
        className={`h-44 mb-3 rounded-lg w-80 shadow-lg`}
      />
      <Text className="text-white mb-2 capitalize text-base tracking-wider">
        card type
      </Text>
      <ActionCard
        title={"Add / withdraw funds"}
        subTitle={"Add and withdraw funds directly to/from this card"}
        rightIcon="chevron-down"
      />
      <Text className="text-white mb-2 capitalize text-base tracking-wider">
        color
      </Text>
      <View className="my-2 flex flex-row items-center">
        {cardColors.map((color, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedColor(color)}
              className="mx-1"
              key={index}
            >
              <View
                style={{ backgroundColor: color }}
                className={`w-11 h-8 rounded-lg items-center justify-center`}
              >
                {selectedColor === color && (
                  <Ionicons
                    name="ios-checkmark-sharp"
                    size={20}
                    color={color === "white" ? "#000" : "#fff"}
                  />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text className="text-white mb-2 capitalize text-base tracking-wider">
        main currency
      </Text>
      <ActionCard
        title={"United State Dollar (USD)"}
        rightIcon="chevron-down"
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
      <TouchableOpacity
        activeOpacity={0.8}
        className="my-2 rounded-lg bg-blue-600 shadow-lg py-2 items-center justify-center"
      >
        <Text className="text-white mb-2 capitalize text-base text-center tracking-wider">
          continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};
