import { View, Text ,StyleSheet,Image,Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../utils/colors'
import { Labels } from '../utils/labels'
// import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');
const carouselItems = [
  {
    image: 'https://example.com/image1.jpg',
  },
  {
    image: 'https://example.com/image2.jpg',
  },
  {
    image: 'https://example.com/image3.jpg',
  },
];



const  images= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    // require('./assets/images/girl.jpg'),          // Local image
  ]

const ProductDetails = () => {

    // const renderItem = ({ item }:any) => {
    //     return (
    //       <View style={styles.carouselItem}>
    //         <Image style={styles.image} source={{ uri: item.image }} />
    //       </View>
    //     );
    //   };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.themeBlue, Colors.themeSubBlue]}
        style={styles.containerbody}
      >

        <View style={{flexDirection:"row"}}>
            <View style={{flex:0.15}}>
                <Image source={require("../../assets/images/icons/right_arrow.png")} tintColor={Colors.themeSubOrange} style={{height:35,width:35}}/>
            </View>
            <View style={{flex:0.7,alignSelf:"center",alignItems:"center"}}><Text style={{fontSize:18,fontWeight:"bold",color:Colors.themeSubOrange}}>{Labels.productDetails}</Text></View>
            <View style={{flex:0.15}}></View>
        </View>

        {/* <Carousel
            layout={'default'}
            data={carouselItems}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width} */}
        {/* /> */}

      </LinearGradient>

    </SafeAreaView>
  )
}

export default ProductDetails

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

    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: '100%',
        height: '100%',
      },
    
  });
  