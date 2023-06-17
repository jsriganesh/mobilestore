import { View, Text, TouchableOpacity, Image, ScrollView,Dimensions } from 'react-native'
import React from 'react'
import { Labels } from '../../utils/labels'
import { Colors } from '../../utils/colors'


const offers =[
    {name:"1324"},
    {name:"1324"},
    {name:"1324"},
    {name:"1324"},
    {name:"1324"},
    {name:"1324"},
    {name:"1324"}
]
const ExclusiveOfferList = () => {
    const {width}=Dimensions.get("screen")
    const heading=()=>{
        return(
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15,marginBottom:10}}>
        <Text style={{fontSize:18,color:Colors.themeSubOrange,fontWeight:"bold"}}>{Labels.category}</Text>
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:13,color:Colors.textBoxBGColor}}>{Labels.viewAll}{"  "}</Text>
        <Image tintColor={Colors.textBoxBGColor} source={require("../../../assets/images/icons/right_arrow.png")} style={{height:13,width:13}}/>
        </TouchableOpacity>
      </View>
        )
    }
  return (
    <View style={{}}>
      {heading()}
      <View style={{}} >
        <ScrollView >
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
            {
                offers.map((offer,index)=>{
                    return(
                        <View key={index} style={{
                            height:150,
                            width:(width/2)-30,
                            borderRadius:5,backgroundColor:Colors.white,
                            marginRight:15,
                            marginBottom:15
                        }}>

                        </View>
                    )
                })
            }
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ExclusiveOfferList