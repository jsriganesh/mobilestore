import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from "../utils/colors";

interface ButtonProps{
    onPress:CallableFunction,
    label:string
}

export const CommonButton:React.FC<ButtonProps> = ({onPress,label}) => {
  return (
    <TouchableOpacity onPress={()=>onPress()}>
      <LinearGradient
        colors={[Colors.themeOrange, Colors.themeSubOrange]}
        style={styles.commonButtonStyle}
      >
        <Text style={styles.buttonTextStyle}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  commonButtonStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
  },
});
