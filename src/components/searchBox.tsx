import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";
import { Labels } from "../utils/labels";

interface SearchBoxProps {
  type: "button" | "input";
}
const SearchBox: React.FC<SearchBoxProps> = ({ type }) => {
  const [searchValue, setSearchVal] = useState("");
  return (
    <View style={styles.searchBoxContainer}>
      {type == "button" ? (
        <TouchableOpacity style={{ flexDirection: "row", width: "80%" }}>
          <Image
            tintColor={Colors.themeOrange}
            source={require("../../assets/images/icons/search.png")}
            style={styles.imageStyle}
          />
          <Text style={{ color: Colors.textBoxBGColor }}>
            {Labels.searchTextHome}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={{ flexDirection: "row", width: "80%" }}>
          <Image
            tintColor={Colors.themeOrange}
            source={require("../../assets/images/icons/search.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={styles.textBoxStyle}
            value={searchValue}
            placeholder={"search..."}
            placeholderTextColor={Colors.textBoxBGColor}
            onChangeText={(val) => setSearchVal(val)}
          />
        </View>
      )}
      <View style={styles.closeImageContainerStyle}>
        <Image
          tintColor={Colors.themeOrange}
          source={require("../../assets/images/icons/close.png")}
          style={styles.closeImageStyle}
        />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBoxContainer: {
    marginVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  imageStyle: {
    height: 22,
    width: 22,
    marginHorizontal: 10,
  },
  closeImageStyle: {
    height: 10,
    width: 10,
  },
  closeImageContainerStyle: {
    borderRadius: 50,
    borderWidth: 0.5,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    borderColor: Colors.textBoxBGColor,
    marginHorizontal: 10,
  },
  textBoxStyle: {
    width: "100%",
    color: Colors.textBoxBGColor,
  },
});
