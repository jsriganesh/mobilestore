import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../utils/colors";
import { Labels } from "../utils/labels";
import { UnderLine } from "../components/commonComponents";
import { CommonButton } from "../components/button";
import Footer from "../components/footer";
import { footerList } from "../utils/constants";
import CartItemDetails from "../components/cart/itemDetails";
import PageHeader from "../components/pageHeader";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../utils/screenNames";

export type MyCartListProps = {};

const MyCartList = (props: MyCartListProps) => {
  const navigation = useNavigation()
  const priceDetails = (label: string, value: string) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 0.5, color: "grey" }}>{label}</Text>
        <Text style={{ flex: 0.5, textAlign: "right" }}>{value}</Text>
      </View>
    );
  };

  const totalPriceDetails = (label: string, value: string) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            flex: 0.5,
            color: Colors.black,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            flex: 0.5,
            textAlign: "right",
            fontSize: 20,
            color: Colors.green,
            fontWeight: "bold",
          }}
        >
          {value}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >
                <PageHeader label={Labels.cartList}/>
        <View style={{ flex: 1,borderRadius:5}}>
          <ScrollView>
          <View style={{ flex: 1,borderRadius:5,padding:2,backgroundColor:Colors.white }}>
            <CartItemDetails />
            <CartItemDetails />
            <CartItemDetails />
            <CartItemDetails />
            <CartItemDetails />
            <CartItemDetails />
            <CartItemDetails />
            </View>
          </ScrollView>
        </View>
        <View style={styles.overAllProceDetails}>
          {priceDetails("Item", "4")}
          {priceDetails("Sub Total", "₹ 4,000")}
          {priceDetails("Delivery Charge", "100")}
          {priceDetails("Item", "4")}

          <UnderLine />
          {totalPriceDetails("Total", "₹ 4,000")}
          <UnderLine />
        </View>
        <CommonButton label={Labels.placeOrder} onPress={() => {navigation.navigate(ScreenNames.addressList as never)}} />
        <Footer seleted={footerList[2]} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MyCartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  overAllProceDetails: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});
