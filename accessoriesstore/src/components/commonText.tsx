import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../utils/colors';


interface HeaderTextProps{
    label:string;
    color?:string;
}
export const HeaderText:React.FC<HeaderTextProps> = ({label,color}) => {
  return (
      <Text style={[styles.headerText,color ? {color:color}:null]}>{label}</Text>
  )
}


const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:"bold",
        color:Colors.white
    }
})
