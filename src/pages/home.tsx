import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";
import { CommonButton } from "../components/button";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderText } from "../components/commonText";
import { Labels } from "../utils/labels";
import { CommonInput } from "../components/textBox";
import { TermsAndCondition } from "../components/termsAndCondition";
import SingeSelect from "../components/dropdownSelection";
import Header from "../components/header";
import SearchBox from "../components/searchBox";
import ImageCarousel from "../components/imageCarousel";
import CategoryList from "../components/category/categoryList";
import ExclusiveOfferList from "../components/exclusiveOffer/exclusiveOfferList";
import Footer from "../components/footer";

interface HomeProps {}
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >
        <Header/>
        <SearchBox type={"button"}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCarousel/>
        <CategoryList/>
        <ExclusiveOfferList/>
        </ScrollView>
        <Footer/>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  containerbody: {
    // alignItems: "center",
    // justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
});
