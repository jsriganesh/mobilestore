import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { Colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../utils/screenNames";

const { width } = Dimensions.get("screen");
const ItemBasicDetails = () => {
    const navigation = useNavigation()
  return (
    // <TouchableOpacity style={styles.cardContainer}>
    //   <Image
    //     source={require("../../../assets/images/product/p1.png")}
    //     //   source={product.product_image}
    //     resizeMode="center"
    //     style={{ width: "100%", height: 120 }}
    //   />
    //   <View>
    //     <Text style={styles.productNameText} numberOfLines={2}>
    //       {"product.product_name"}
    //     </Text>
    //   </View>
    // </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate(ScreenNames.productDetails as never)} style={styles.cardContainer}>
      <View style={{ flex: 0.4 }}>
        <Image
          source={require("../../../assets/images/product/p1.png")}
          //   source={product.product_image}
          resizeMode="center"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: "space-between",
          paddingVertical: 5,
        }}
      >
        <Text style={styles.productNameText} numberOfLines={5}>
          {
            "Lenovo IdeaCentre AIO 3 11th Gen Intel Core i3 21.5 FHD IPS 3-Side Edgeless All-in-One Desktop with Alexa Built-in (8GB/512GB SSD/Windows11/Office 2021/HD 720p Camera/Speakers/Wired Keyboard & Mouse)"
          }
        </Text>

        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.discountPrice}>{"₹ 2000"}</Text>
            <Text style={styles.actualPrice}>
              {"M.R.P: "}
              <Text style={styles.stripedText}>{"₹ 1800 "}</Text>
              <Text>{"(20% off)"}</Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBasicDetails;
const styles = StyleSheet.create({
  //   cardContainer: {
  //     height: 200,
  //     width: width / 2 - 30,
  //     borderRadius: 5,
  //     backgroundColor: Colors.white,
  //     marginRight: 5,
  //     marginLeft: 10,
  //     marginBottom: 15,
  //   },
  //   productNameText: {
  //     fontWeight: "bold",
  //     fontSize: 12,
  //     color: Colors.themeBlue,
  //   },
  //   productNameView: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //     height: 30,
  //   },
  cardContainer: {
    height: 150,
    // width: width  - 30,
    borderRadius: 5,
    backgroundColor: Colors.white,
    // marginRight: 15,
    // marginLeft: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  productNameText: {
    fontWeight: "bold",
    fontSize: 12,
    color: Colors.themeBlue,
  },
  productNameView: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
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
});
