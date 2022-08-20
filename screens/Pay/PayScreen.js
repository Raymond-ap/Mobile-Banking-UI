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
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function PayScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState("");

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
              onChangeText={(search) => setSearchText(search)}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const FriendCard = ({item}) => {
  return <TouchableOpacity activeOpacity={0.8} className="flex flex-row items-center justify-between bg-slate-700 px-3 rounded-lg">
    <Image resizeMode="cover" 
      source={item.img}
      className="h-9 w-9 rounded-full"
    />
    <View className="mx-2" style={{flex:1}}>
      <Text className="font-semibold text-base capitalize text-gray-300">{item.name}</Text>
      <Text className="font-semibold text-sm capitalize">{item.handle}</Text>
    </View>
    <TouchableOpacity activeOpacity={1}>
      <Ionicons name="chevron-forward" size={20} color={"#9ca3af"}/>
    </TouchableOpacity>
  </TouchableOpacity>
}