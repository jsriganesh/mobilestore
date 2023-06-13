// https://www.jsdelivr.com/package/npm/react-native-dropdown-select-list-expo
import { View, Text, Image, TouchableOpacity,StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { CommonInput } from "./textBox";
import { Labels } from "../utils/labels";
import { Colors } from "../utils/colors";

const SingeSelect = () => {
  const [open,setOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<any>({
    value: "1",
    label: "Mobiles",
    disabled: true,
  });
  const data = [
    { value: "1", label: "Mobiles", disabled: true },
    { value: "2", label: "Appliances" },
    { value: "3", label: "Cameras" },
    { value: "4", label: "Computers", disabled: true },
    { value: "5", label: "Vegetables" },
    { value: "6", label: "Diary Products" },
    { value: "7", label: "Drinks" },
    { value: "8", label: "Diary Products" },
    { value: "9", label: "Drinks" },
  ];

  return (
    <View style={styles.container}>
      {/* <CommonInput
        value={searchText}
        onChangeText={setSearchText}
        placeholder={Labels.selectBusinessType}
      /> */}

<View style={styles.textBoxContainer}>
      <Image
        source={require("../../assets/images/icons/search.png")}
        style={styles.textBoxImageStyle}
        tintColor={Colors.white}
      />
      <TouchableOpacity
      onPress={()=>setOpen(!open)}
        style={styles.textBoxStyle}
      >
        <Text style={{color:Colors.white}}>{selected.label}</Text>
        </TouchableOpacity>
    </View>

      {
        open &&
      
      <View
        style={styles.optionsContainer}
      >
        <ScrollView>
        {data.map((opt, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelected(opt);
                setOpen(false)
              }}
              key={index}
              style={styles.optionsRow}
            >
              <Text style={{ color: Colors.white }}>{opt.label}</Text>
              {selected.value == opt.value && (
                <Image
                  source={require("../../assets/images/icons/tick.png")}
                  tintColor={Colors.themeSubOrange}
                  style={{ height: 20, width: 20 }}
                />
              )}
            </TouchableOpacity>
          );
        })}
        </ScrollView>
      </View>
}
    </View>
  );
};

export default SingeSelect;


const styles = StyleSheet.create({
    optionsRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.textBoxBGColor,
      },
      optionsContainer: {
        borderRadius: 5,
        borderColor: Colors.white,
        borderWidth: 1,
        maxHeight: 200,
        width: "90%",
      },
      container:{
        width: "100%", alignItems: "center" 
      },
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
        width: 22.,
        marginHorizontal: 15,
        // borderRightColor:Colors.white,
        // borderRightWidth:1
      },
})