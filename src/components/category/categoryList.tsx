import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Labels } from "../../utils/labels";
import { Colors } from "../../utils/colors";
import { productList } from "../../../bummyDatas";

// const productList = productList;

const CategoryList = () => {
  const heading = () => {
    return (
      <View style={styles.headerRow}>
        <Text style={styles.headerFontStyle}>{Labels.category}</Text>
        <TouchableOpacity style={styles.viewAllTouch}>
          <Text style={styles.viewAllText}>
            {Labels.viewAll}
            {"  "}
          </Text>
          <Image
            tintColor={Colors.textBoxBGColor}
            source={require("../../../assets/images/icons/right_arrow.png")}
            style={{ height: 13, width: 13 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{}}>
      {heading()}
      <View style={{}}>
        <ScrollView horizontal>
          {productList.map((product, index) => {
            return (
              <TouchableOpacity key={index} style={styles.cardContainer}>
                <Image
                  // source={require("../../../assets/images/product/p1.png")}
                  source={product.product_image}
                  resizeMode="center"
                  style={{ width: 100, height: 120 }}
                />
                <View style={styles.productNameView}>
                  <Text style={styles.productNameText} numberOfLines={2}>
                    {product.product_name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  headerFontStyle: {
    fontSize: 18,
    color: Colors.themeSubOrange,
    fontWeight: "bold",
  },
  viewAllTouch: { flexDirection: "row", alignItems: "center" },
  viewAllText: { fontSize: 13, color: Colors.textBoxBGColor },
  cardContainer: {
    height: 150,
    width: 100,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginRight: 10,
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
});
