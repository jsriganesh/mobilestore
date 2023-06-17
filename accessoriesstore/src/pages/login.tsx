import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";
import { CommonButton } from "../components/button";
import { useNavigation } from "@react-navigation/native";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          resizeMode="center"
          source={require("../../assets/images/app/logo-with-text.png")}
          style={styles.logoStyle}
        />

        <CommonButton onPress={() => {navigation.navigate("registration" as never)}} label={"Login with google"} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logoStyle: {
    height: 100,
    width: 300,
    marginBottom: 100,
  },
});
