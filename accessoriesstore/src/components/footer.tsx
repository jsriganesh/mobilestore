import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Colors } from '../utils/colors'
import { footerList } from '../utils/constants'
import { useNavigation } from '@react-navigation/native'

const Footer = ({seleted,}) => {
    const navigation = useNavigation()
    const [selectedFooter,changeFooter]= useState(seleted ? seleted : footerList[0])

    useEffect(()=>{
        console.log("selectedFooter ",selectedFooter),
        navigation.navigate(selectedFooter.screenName as never)
    },[selectedFooter])

  return (
    <View style={styles.footerConteiner}>
      {
        footerList.map((opt,index)=>{
            return(
                <TouchableOpacity onPress={()=>changeFooter(opt)} key={index} style={[styles.footerOption]}>
                    <Image source={selectedFooter.type == opt.type ? opt.selectImage : opt.unSelectImage} style={[styles.imageStyle, opt.type=="profile" ?{borderRadius:50}:{}, selectedFooter == "profile" && opt.type=="profile" ?styles.profileSelectedStyle:null ]}/>
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