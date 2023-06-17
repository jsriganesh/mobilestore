import { View, Text, Dimensions, StyleSheet,Image,TouchableOpacity } from "react-native";
// import React from "react";
import React, { useRef, useState } from 'react';
import { TextInput, Animated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors } from "../../utils/colors";
import SearchBox from "../searchBox";
import LinearGradient from 'react-native-linear-gradient';
import ItemBasicDetails from "./itemBasicDetails";

const { height } = Dimensions.get("screen");

interface SearchModalProps{
    closeModal:CallableFunction
}

const SearchModal:React.FC<SearchModalProps> = ({closeModal}) => {

  return (
   
    <View style={style.modalContainer}>
         <KeyboardAwareScrollView
    contentContainerStyle={[style.modalBody,{justifyContent:"center"}]}
    keyboardShouldPersistTaps="handled"
  >
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={style.modalBorederStyle}
      >
        <TouchableOpacity onPress={()=>closeModal()} style={style.closeButtonStyle}>
            <Image source={require("../../../assets/images/icons/close.png")} tintColor={Colors.themeSubOrange} style={{height:10,width:10}}/>
        </TouchableOpacity>
        <View style={style.smallLine} />
        <SearchBox type={"input"}/>

            <ItemBasicDetails/>
            <ItemBasicDetails/>
            <ItemBasicDetails/>
            <ItemBasicDetails/>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SearchModal;

const style = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    backgroundColor: "rgba(64, 64, 64, 0.8)", // Adjust the opacity as needed (0.0 - 1.0)
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4, // For Android devices
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
  modalBody: {
    // flex:1,
    height: height - 80,
    marginTop:80,
    // backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  modalBorederStyle: {
    flex:1,
    paddingHorizontal:10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  smallLine: {
    height: 4,
    borderRadius: 10,
    width: 100,
    backgroundColor: Colors.textBoxBGColor,
    alignSelf: "center",
    marginVertical: 10,
  },
  closeButtonStyle:{position:"absolute",right:5,marginTop:5,height:25,width:25,borderRadius:50,borderWidth:2,borderColor:Colors.themeSubOrange,justifyContent:"center",alignItems:"center"}
  
  
});
