import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../utils/colors';

export type UnderLineProps = {
      mv?:number
    }


export const UnderLine:React.FC<UnderLineProps> = ({mv}) => {
    return (
        <View
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "grey",
          opacity: 0.5,
          marginVertical:mv || mv === 0 ? mv: 10,
        }}
      />
    )
}

interface TitleProps {
  title: string;
  color?:string
}
export const SmallTitleText: React.FC<TitleProps> = ({ title,color }) => {
  return (
    <Text style={{ fontWeight: "bold", color: color ? color : Colors.black, fontSize: 14 }}>
      {title}
    </Text>
  );
};

interface RadioBtnProps{
  flag:boolean
}
export const RadioButtonView:React.FC<RadioBtnProps>=({flag})=>{
  return(
    <View style={{
      height:18,
      width:18,
      borderRadius:50,
      borderWidth:1,
      borderColor:Colors.themeSubOrange,
      justifyContent:"center",
      alignItems:"center",marginRight:10
  }}>
      <View style={{backgroundColor:flag ? Colors.themeSubOrange :Colors.white,height:10,width:10,borderRadius:50}}/>
  </View>
  )
}