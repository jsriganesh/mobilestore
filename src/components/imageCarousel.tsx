import { View, Text ,Dimensions} from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors'

const ImageCarousel = () => {
    const {width}= Dimensions.get("screen")
  return (
    <View style={{
        alignItems:"center",
        alignSelf:"center",
        height:150,width:width-30,backgroundColor:Colors.white,borderRadius:10
    }}>
    </View>
  )
}

export default ImageCarousel