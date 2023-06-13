import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

interface CommonInputProps {
  value: string;
  onChangeText: CallableFunction;
  placeholder: string;
  image: string;
}
export const CommonInput: React.FC<CommonInputProps> = ({
  value,
  onChangeText,
  placeholder,
  image
}) => {
  return (
    <View style={styles.textBoxContainer}>
        {
            image &&
            <Image
        source={image}
        style={styles.textBoxImageStyle}
        tintColor={Colors.white}
      />
        }
      
      <TextInput
        style={styles.textBoxStyle}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={Colors.white}
        onChangeText={(val) => onChangeText(val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textBoxContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: "90%",
    borderRadius: 5,
    backgroundColor: Colors.textBoxBGColor,
    marginVertical: 10,
  },
  textBoxStyle: {
    width: "100%",
    // paddingHorizontal:5,
    color: Colors.white,
  },
  textBoxImageStyle: {
    height: 22,
    width: 22,
    marginHorizontal: 15,
    // borderRightColor:Colors.white,
    // borderRightWidth:1
  },
});
