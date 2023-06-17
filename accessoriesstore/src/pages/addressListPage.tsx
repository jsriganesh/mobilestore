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
import { RadioButtonView, SmallTitleText, UnderLine } from "../components/commonComponents";
import { CommonButton } from "../components/button";
import Footer from "../components/footer";
import { footerList } from "../utils/constants";
import CartItemDetails from "../components/cart/itemDetails";
import PageHeader from "../components/pageHeader";

export type AddressListProps = {};

const AddressList = (props: AddressListProps) => {
  const addressCard = (flag:boolean) => {
    return (
      <TouchableOpacity style={styles.cardStyle}>
        <RadioButtonView flag={flag}/>
        <View>
          <SmallTitleText title="Home" />
          <Text style={{ color: "grey", fontSize: 14, marginVertical: 5 }}>
            {"2/179, mettuplayam, coimbatore , tamilnadu, india 641305"}
          </Text>
          <Text>
            <SmallTitleText title="Mobile : " />
            {"8344233713"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >
        <PageHeader label={Labels.deliveryAddress} />
        <View style={{ flex: 1, borderRadius: 5 }}>
          <SmallTitleText title={Labels.shippingTo} color={Colors.white} />
          <ScrollView>
            <View>
              {addressCard(true)}
              {addressCard(false)}
              {addressCard(false)}
              {addressCard(false)}
            </View>
          </ScrollView>
        </View>

        <CommonButton label={Labels.confirmAddress} onPress={() => {}} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  cardStyle: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    flexDirection: "row",
    padding: 10,
    margin:5
  },
});
