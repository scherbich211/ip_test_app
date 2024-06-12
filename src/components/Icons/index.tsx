import React from "react";
import { View } from "react-native";

 const Square = ({ focused }:{ focused: boolean, color: string, size: number, }) => (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 7,
        borderColor: focused ? '#fff' :  '#ADADAD',
        borderWidth: 2,
      }}
    />
  );

  export default Square

 