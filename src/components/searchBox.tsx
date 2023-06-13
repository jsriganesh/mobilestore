import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'
import { Labels } from '../utils/labels'

const SearchBox = () => {
  return (
    <TouchableOpacity style={styles.searchBoxContainer}>
        <View style={{flexDirection:"row"}}>
        <Image tintColor={Colors.themeOrange} source={require("../../assets/images/icons/search.png")} style={styles.imageStyle}/>
        <Text style={{color:Colors.textBoxBGColor}}>{Labels.searchTextHome}</Text>
        </View>

    <View style={styles.closeImageContainerStyle}>
        <Image tintColor={Colors.themeOrange} source={require("../../assets/images/icons/close.png")} style={styles.closeImageStyle}/>
        </View>
    </TouchableOpacity>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    searchBoxContainer:{
        marginVertical:15,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:Colors.white,
        paddingVertical:10,
        justifyContent:"space-between"
    },
    imageStyle:{
        height:22,
        width:22,
        marginHorizontal:10       
    },
    closeImageStyle:{
        height:10,
        width:10,
          
    },
    closeImageContainerStyle:{
        borderRadius:50,
        borderWidth:0.5,
        height:20,
        justifyContent:"center",
        alignItems:"center",
        width:20,
        borderColor:Colors.textBoxBGColor,
        marginHorizontal:10   
    }
})