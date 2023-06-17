import React, { FC, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../utils/colors";
import { sampleImages } from "../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../utils/screenNames";

export type CartItemDetailsProps = {};

const CartItemDetails: FC<CartItemDetailsProps> = ({}) => {
    const navigation= useNavigation()
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{navigation.navigate(ScreenNames.productDetails as never)}} style={styles.details}>
        <View
          style={{
            borderRadius: 5,
            justifyContent: "center",
            flex: 0.3,
            alignItems: "center",
          }}
        >
          <Image style={styles.imageStyle} source={{ uri: sampleImages[0] }} />
        </View>
        <View
          style={{
            flex: 0.7,
            paddingVertical: 10,
            justifyContent: "space-between",
          }}
        >
          <Text numberOfLines={2}>
            {
              "Dell Vostro 3425 Laptop, AMD Ryzen 5-5500U/ 8GB/ 512GB/ 14.0 (35.56Cms) FHD WVA AG 250 nits/Win 11+ MSO'21/15 Month McAfee/Carbon Black/ 1.48Kgs"
            }
          </Text>
          <Text style={styles.discountPrice}>{"₹ 2000"}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.quantity}>
        <TouchableOpacity onPress={() => count > 1 && setCount(count - 1)}>
          <Image
            style={styles.plusAndMinus}
            source={require("../../../assets/images/icons/minus.png")}
          />
        </TouchableOpacity>
        <Text style={styles.discountPrice}>{count}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Image
            style={styles.plusAndMinus}
            source={require("../../../assets/images/icons/plus.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemDetails;

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: "row",
    height: 100,
  },
  details: {
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "#F4F3F3",
    flex: 0.87,
  },
  quantity: {
    alignItems: "center",
    paddingVertical: 5,
    flex: 0.13,
    justifyContent: "space-between",
  },
  imageStyle: {
    borderRadius: 5,
    height: 70,
    width: 70,
  },
  discountPrice: {
    color: Colors.green,
    fontWeight: "bold",
    fontSize: 20,
  },
  plusAndMinus: {
    height: 20,
    width: 20,
  },
});
