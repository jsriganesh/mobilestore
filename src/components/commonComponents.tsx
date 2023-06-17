import React from 'react';
import { Text, View } from 'react-native';

export type UnderLineProps = {
    
    }


export const UnderLine:React.FC<UnderLineProps> = ({}) => {
    return (
        <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "grey",
          opacity: 0.5,
          marginVertical: 10,
        }}
      />
    )
}