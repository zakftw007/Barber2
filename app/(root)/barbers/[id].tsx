import { Text, View } from "react-native";
import React from 'react';
import { useLocalSearchParams } from "expo-router";

const Barber = () => {

    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Barber {id}</Text>
    </View>
  );
};

export default Barber;