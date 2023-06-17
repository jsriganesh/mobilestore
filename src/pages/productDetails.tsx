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
import { UnderLine,SmallTitleText } from "../components/commonComponents";
import { CommonButton } from "../components/button";
import { sampleImages } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import PageHeader from "../components/pageHeader";

const { width, height } = Dimensions.get("screen");
const specifications = [
  {
    label:"Sales Package",
    value:"Laptop, Power Adaptor, User Guide, Warranty Documents"
  },
  {
    label:"Model Number",
    value:"14IGL05"
  },
  {
    label:"Part Number",
    value:"82C1002SHA"
  },
  {
    label:"Model Name",
    value:"14IGL05"
  },
  {
    label:"Series",
    value:"Slim 3 Chromebook Touch Intel"
  },
  {
    label:"Color",
    value:"Platinum Grey"
  },
  {
    label:"Type",
    value:"Chromebook"
  },
  {
    label:"Suitable For",
    value:"Processing & Multitasking"
  },
  {
    label:"Battery Backup",
    value:"Up to 10 Hours"
  },{
    label:"Power Supply",
    value:"45W USB-C (3-pin)"
  },
  {
    label:"MS Office Provided",
    value:"No"
  }

  
]

interface ImageProps {
  selectedIndex: number;
  setSelectedIndex: CallableFunction;
}

const ShowProductImages: React.FC<ImageProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        borderRadius: 5,
        alignSelf: "center",
        height: height / 2 - 60,
        width: width - 30,
        backgroundColor: Colors.white,
      }}
    >
      <Image
        source={{ uri: sampleImages[selectedIndex] }}
        resizeMode="center"
        style={{
          borderRadius: 5,
          alignSelf: "center",
          height: height / 2.5 - 150,
          width: width - 100,
        }}
      />

      <View>
        <ScrollView horizontal>
          {sampleImages.map((img, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedIndex(index);
                }}
              >
                <Image
                  source={{ uri: img }}
                  style={[
                    {
                      height: 80,
                      width: 80,
                      borderRadius: 5,
                      marginLeft: 5,
                      marginRight: 5,
                    },
                    index == selectedIndex
                      ? {
                          borderWidth: 3,
                          borderColor: Colors.themeSubOrange,
                        }
                      : {},
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};



const PriceDetails = () => {

  const [showMoreFlag,updateFLag]= useState(false)

  return (
    <View>
      <SmallTitleText title={Labels.description} />
      {/* <View style={{flexDirection:"row"}}> */}
      <Text style={{ color: "grey", fontSize: 16 }}>
        {
          "Dell Vostro 3425 Laptop, AMD Ryzen 5-5500U/ 8GB/ 512GB/ 14.0 (35.56Cms) FHD WVA AG 250 nits/Win 11+ MSO'21/15 Month McAfee/Carbon Black/ 1.48Kgs"
        }

      <Text onPress={()=>{updateFLag(true)}} style={{ color: Colors.linkBlue, fontSize: 16 }}>
        {" "}{!showMoreFlag ? Labels.showMore:""}
      </Text>
      </Text>

        {
          showMoreFlag &&
        
        <>
      <SmallTitleText title={Labels.specifications} />
      {
        specifications.map((opt,index)=>{
          return(
            <View key={index} style={{flexDirection:"row"}}>
              <Text style={{flex:0.4,color:"grey"}}>{opt.label}</Text>
              <Text style={{flex:0.6}}>{opt.value}</Text>
            </View>
          )
        })
      }
      </>
}

        <UnderLine/>
      
      <SmallTitleText title={Labels.priceDetails} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.discountPrice}>{"₹ 2000"}</Text>
        <Text style={styles.actualPrice}>
          {"  M.R.P: "}
          <Text style={styles.stripedText}>{"₹ 1800 "}</Text>
          <Text>{"(20% off)"}</Text>
        </Text>
      </View>
    </View>
  );
};

const ProductDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation()
  return ( 
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >
        <PageHeader label={Labels.priceDetails} showFavIcon={true}/>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity  onPress={()=>navigation.goBack()} style={{}}>
            <Image
              source={require("../../assets/images/icons/back_arrow.png")}
              tintColor={Colors.themeSubOrange}
              style={{ height: 35, width: 35 }}
            />
          </TouchableOpacity>
          <View
            style={{
              alignSelf: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/images/icons/like.png")}
              tintColor={Colors.themeSubOrange}
              style={{ height: 35, width: 35, marginRight: 20 }}
            />
            <Image
              source={require("../../assets/images/icons/share.png")}
              tintColor={Colors.themeSubOrange}
              style={{ height: 32, width: 32 }}
            />
          </View>
        </View> */}

            <ScrollView style={{borderRadius:5}}>
        <ShowProductImages
          setSelectedIndex={setSelectedIndex}
          selectedIndex={selectedIndex}
        />

        <View
          style={styles.detailsView}
        >
          <PriceDetails />
        </View>
        </ScrollView>

        <View style={styles.footerBtn}>
          <View style={{flex:0.45}}>
            <CommonButton label={Labels.addToCart} onPress={()=>{}} />
            </View>
            <View style={{flex:0.45}}>
            <CommonButton label={Labels.buyNow} onPress={()=>{}} />
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerbody: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },

  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  discountPrice: {
    color: Colors.green,
    fontWeight: "bold",
    fontSize: 20,
  },
  actualPrice: {
    color: Colors.textBoxBGColor,
    // fontWeight:"bold",
    fontSize: 12,
  },
  stripedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  footerBtn:{
    flexDirection:"row",justifyContent:"space-between",paddingVertical:10
  },
  detailsView:{
            backgroundColor: Colors.white,
            borderRadius: 5,
            marginHorizontal: 5,
            marginTop: 10,
            padding: 5,
  }
});
