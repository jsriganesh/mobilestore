import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";
import { CommonButton } from "../components/button";
import LinearGradient from 'react-native-linear-gradient';
import { HeaderText } from "../components/commonText";
import { Labels } from "../utils/labels";
import { CommonInput } from "../components/textBox";
import { TermsAndCondition } from "../components/termsAndCondition";
import SingeSelect from "../components/dropdownSelection";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../utils/screenNames";

interface RegistrationProps {}

const user = require("../../assets/images/icons/user_name.png")
const phone = require("../../assets/images/icons/phone.png")
const business = require("../../assets/images/icons/shop.png")
const address = require("../../assets/images/icons/address.png")

const Registration: React.FC<RegistrationProps> = ({}) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >
        <View style={{}}>
          <View style={styles.welcomeText}>
            <HeaderText label={Labels.welcomeTo} />
            <HeaderText label={Labels.appName} color={Colors.themeOrange} />
          </View>
          <View style={styles.body}>
            <View style={styles.textBoxbody}>
            <CommonInput
              image={user}
              value=""
              onChangeText={() => {}}
              placeholder={Labels.enteruserName}
            />
            <CommonInput
            image={phone}
              value=""
              onChangeText={() => {}}
              placeholder={Labels.enterMobNo}
            />
            <CommonInput
            image={business}
              value=""
              onChangeText={() => {}}
              placeholder={Labels.enterBusinessName}
            />
            <CommonInput
              image={address}
              value=""
              onChangeText={() => {}}
              placeholder={Labels.enterAddress}
            />
            <SingeSelect/>

            </View>
            <View style={styles.tcStyle}>
            <TermsAndCondition value={true} onChangesFlag={() => {}} />
            </View>
          </View>
        </View>
        <CommonButton onPress={() => {navigation.navigate(ScreenNames.home as never)}} label={"Register"} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  containerbody: {
    // alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  welcomeText: {
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  body:{

  },
  textBoxbody:{
    // flex:1,
    alignItems: "center",
  },
  tcStyle: {
    // flex:1,
    // position:"relative",
    marginTop:15,
    alignItems: "center",
  },
});
