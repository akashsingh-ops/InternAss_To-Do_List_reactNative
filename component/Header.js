import { View, Text } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={{ marginLeft: 15 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>{props.name}</Text>
    </View>
  );
};

export default Header;
