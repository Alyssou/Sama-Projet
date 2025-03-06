import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import Group13Img from "../assets/images/group1.png";
export default function IPhone14() {
  const router = useRouter();

  return (
    <View style={styles.iphone141}>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={Group13Img}
      />
      <Text style={[styles.afia, styles.timeFlexBox]}>PMed</Text>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => router.push("/IPhone141")}
      >
        <Text style={styles.registerButtonText}>Get Started</Text>
      </TouchableOpacity>

      <Image
        style={styles.iphone141Child}
        contentFit="cover"
        source={require("../assets/images/ellipse-43x.png")}
      />

      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/images/vector3x.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "9.48%",
    width: "20.51%",
    top: "35.66%",
    // right: "39.74%",
    // bottom: "54.86%",
    left: "39.74%",
  },
  afia: {
    top: 399,
    left: 83,
    fontSize: FontSize.size_17xl,
    letterSpacing: 1.8,
    fontFamily: FontFamily.gAMECUBEN,
    width: 223,
  },
  // getStarted: {
  //   top: 636,
  //   left: 126,
  //   fontSize: FontSize.size_5xl,
  //   letterSpacing: 1.2,
  //   lineHeight: 24,
  //   fontWeight: "700",
  //   fontFamily: FontFamily.sFProDisplay,
  //   textAlign: "center",
  //   color: Color.colorWhite,
  // },
  iphone141Child: {
    top: 703,
    left: 156,
    width: 77,
    height: 77,
    position: "absolute",
  },
  vectorIcon: {
    height: "5.33%",
    width: "11.54%",
    top: "88.70%",
    left: "46%",
  },
  iphone141: {
    backgroundColor: Color.colorRoyalblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  registerButton: {
    position: "absolute",
    top: 559,
    left: 50,
    width: 300,
    height: 50,
    backgroundColor: Color.colorDodgerblue, // Button background color
    justifyContent: "center", // Align button content vertically
    alignItems: "center", // Align button content horizontally
    borderRadius: 25, // Rounded corners
  },
  registerButtonText: {
    fontSize: FontSize.size_3xl, // Font size
    fontFamily: FontFamily.anekGujaratiRegular, // Font family
    color: Color.colorWhite, // Text color
    fontWeight: "bold", // Text bold
  },
});
