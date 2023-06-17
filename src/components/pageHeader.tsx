import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../utils/colors';

export type PageHeaderProps = {
    label:string,
    showFavIcon?:boolean
    }


const PageHeader:React.FC<PageHeaderProps> = ({label,showFavIcon}) => {
    const navigation = useNavigation()

    return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity  onPress={()=>navigation.goBack()} style={{flex:0.15}}>
            <Image
              source={require("../../assets/images/icons/back_arrow.png")}
              tintColor={Colors.white}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
          <View style={{flex:0.7,alignItems:"center"}}>
                <Text style={{fontSize:18,color:Colors.white,fontWeight:"bold"}}>{label}</Text>
          </View>
          <View
            style={{
            //   alignSelf: "center",
              alignItems: "flex-end",
            //   flexDirection: "row",
              flex:0.15
            }}
          >
            {
               showFavIcon &&  <Image
               source={require("../../assets/images/icons/like.png")}
               tintColor={Colors.red}
               style={{ height: 25, width: 25}}
             />
            }
           
            {/* <Image
              source={require("../../assets/images/icons/share.png")}
              tintColor={Colors.themeSubOrange}
              style={{ height: 25, width: 25 }}
            /> */}
          </View>
        </View>
    )
}

export default PageHeader

const styles = StyleSheet.create({
    container:{
            
    }
})