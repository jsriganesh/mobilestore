import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";
import { Labels } from "../utils/labels";
import { Colors } from "../utils/colors";

interface TermsAndConditionProps {
  value: boolean;
  onChangesFlag: CallableFunction;
}
export const TermsAndCondition: React.FC<TermsAndConditionProps> = ({
  value,
  onChangesFlag,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={()=>onChangesFlag(!value)}
        style={[
          styles.checkboxBorderStyle,
          value ? { borderColor: Colors.themeSubOrange } : null,
        ]}
      >
        {value ? (
          <Image
            source={require("../../assets/images/icons/tick.png")}
            tintColor={Colors.themeSubOrange}
            style={{ height: 20, width: 20 }}
          />
        ) : null}
      </TouchableOpacity>
      <Text style={{ color: Colors.white }}>{Labels.pleaseAcceptTC}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    width:"90%",
    // backgroundColor:"red",
    flexDirection: "row",
    // justifyContent:"center",
    alignItems:"center",
    // marginVertical:15
  },
  checkboxBorderStyle: {
    height: 27,
    width: 27,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight:15,
  },
});
