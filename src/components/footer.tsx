import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../utils/colors'
import { footerList } from '../utils/constants'

const Footer = () => {
    const [selectedFooter,changeFooter]= useState(footerList[0].type)
  return (
    <View style={styles.footerConteiner}>
      {
        footerList.map((opt,index)=>{
            return(
                <TouchableOpacity onPress={()=>changeFooter(opt.type)} key={index} style={[styles.footerOption]}>
                    <Image source={selectedFooter == opt.type ? opt.selectImage : opt.unSelectImage} style={[styles.imageStyle, opt.type=="profile" ?{borderRadius:50}:{}, selectedFooter == "profile" && opt.type=="profile" ?styles.profileSelectedStyle:null ]}/>
                </TouchableOpacity>
            )
        })
      }
    </View>
  )
}

export default Footer

const styles=StyleSheet.create({
    footerConteiner:{
        alignItems:"center",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:Colors.white,
        borderRadius:5,
        width:"100%",
        height:45
    },
    footerOption:{
        height:30,width:30
    },
    imageStyle:{
        height:30,width:30
    },
    profileSelectedStyle:{
        borderRadius:50,
        borderWidth:2,
        borderColor:Colors.themeSubOrange

    }
})