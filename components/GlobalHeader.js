import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

const GlobalHeader = ({title, onPress}) => {
  return (
    <View className="px-4 py-2 bg-slate-900 flex flex-row items-center justify-between">
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Ionicons name="chevron-back-sharp" size={25} color={"#fff"}/>
    </TouchableOpacity>
      <Text className="text-xl tracking-widest text-white capitalize font-bold">{title}</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          resizeMode="cover"
          source={require("../assets/images/profile.jpg")}
          className="w-10 h-10 rounded-full"
        />
      </TouchableOpacity>
    </View>
  )
}

export default GlobalHeader