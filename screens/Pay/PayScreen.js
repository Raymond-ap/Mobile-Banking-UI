import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { GlobalHeader } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
import { FRIENDS } from "../../constants";

export default function PayScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");
  const [users, setUsers] = React.useState(FRIENDS);

  const handleSearch = (text) => {};

  return (
    <SafeAreaView className="bg-slate-900 h-full">
      <GlobalHeader title={"pay"} onPress={() => navigation.navigate("Home")} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="my-2 mx-4 p-3 bg-slate-800 rounded-lg ">
          <Text className="text-base tracking-wider text-white capitalize">
            search
          </Text>
          {/* search */}
          <View className="bg-slate-700 my-3 rounded-lg flex flex-row items-center">
            <TextInput
              value={searchText}
              onChangeText={(search) => {
                setSearchText(search);
                handleSearch();
              }}
              placeholder="Phone number, email, name, handle"
              className="w-full px-2 py-2 text-gray-400 text-sm tracking-widest"
              placeholderTextColor={"#9ca3af"}
              style={{ flex: 1 }}
            />
            <TouchableOpacity
              activeOpacity={0.1}
              className="mx-2"
              onPress={() => setSearchText("")}
            >
              <FontAwesome name="times-circle" size={20} color={"#9ca3af"} />
            </TouchableOpacity>
          </View>
          {/* friends list */}
          <Text className="text-base tracking-wider text-white capitalize">
            friends
          </Text>
          <View className="my-2">
            {users.map((item, index) => {
              return <FriendCard item={item} key={index} />;
            })}
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="items-center justify-center my-2"
          >
            <Text className="text-base font-bold tracking-wider text-blue-500 capitalize">
              invite more friends
            </Text>
          </TouchableOpacity>
        </View>
        <View className="my-2 mx-4 p-3 bg-slate-800 rounded-lg items-center justify-center ">
          <Text className="text-base font-bold tracking-wider text-white text-center">
            One time issued card
          </Text>
          <View className="my-2"></View>
          <Text className="font-semibold text-xs text-gray-400 capitalize text-center">
            Issue a one time use card to pay at any store
          </Text>
        </View>
        <View className="flex flex-row mx-4">
          <ActionCard
            title={"Digital payment"}
            icon={<Entypo name="fingerprint" size={30} color={"#0284c7"} />}
            subTitle={"Secure with biometric authentication"}
          />
          <View className="mx-0.5" />
          <ActionCard
            icon={<Ionicons name="ios-phone-portrait-outline" size={35} color={"#0284c7"} />}
            title={"Physical payment"}
            subTitle={"Easy payment with nfc"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const ActionCard = ({ icon, title, subTitle }) => {
  return (
    <View
      style={{ flex: 1 }}
      className="my-2 w-full p-3 bg-slate-800 rounded-lg items-center justify-center "
    >
      <Text className="text-base font-bold tracking-wider text-white text-center">
        {title}
      </Text>
      <View className="my-3">{icon}</View>
      <Text className="font-semibold text-xs text-gray-400 capitalize text-center">
        {subTitle}
      </Text>
    </View>
  );
};

const FriendCard = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex flex-row items-center py-2 justify-between bg-slate-700 px-3 rounded-lg my-1"
    >
      <Image
        resizeMode="cover"
        source={item.img}
        className="h-9 w-9 rounded-full"
      />
      <View className="mx-2" style={{ flex: 1 }}>
        <Text className="font-semibold text-base capitalize text-gray-200">
          {item.name}
        </Text>
        <Text className="font-semibold text-sm text-gray-400 capitalize">
          {item.handle}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={1}>
        <Ionicons name="chevron-forward" size={20} color={"#9ca3af"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
