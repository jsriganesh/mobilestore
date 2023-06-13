import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Labels } from "../utils/labels";
import { Colors } from "../utils/colors";

interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.appNameRow}>
        <View style={styles.appIconStyle}></View>
        <Text style={styles.appNameText}>{Labels.appName}</Text>
      </View>

      <TouchableOpacity>
        <Image
          source={require("../../assets/images/icons/menu.png")}
          tintColor={Colors.themeSubOrange}
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  appNameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  appIconStyle: {
    height: 40,
    width: 40,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginRight: 5,
  },
  appNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.themeSubOrange,
  },
  menu: { height: 20, width: 20 },
});
