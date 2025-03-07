import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import Group13Img from "../assets/images/group1.png";

export default function WelcomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.iphone141}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={Group13Img}
        />
        <Text style={styles.afia}>PMed</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.registerButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.elipse}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/images/vector3x.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iphone141: {
    backgroundColor: Color.colorRoyalblue,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  elipse: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white", // Fixed capitalization of "White"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 100,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  groupIcon: {
    width: "20%",
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  afia: {
    fontSize: FontSize.size_17xl,
    letterSpacing: 1.8,
    fontFamily: FontFamily.gAMECUBEN,
    color: Color.colorWhite,
    textAlign: "center",
    marginBottom: 60,
  },
  registerButton: {
    width: 300,
    height: 50,
    backgroundColor: Color.colorDodgerblue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  registerButtonText: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.anekGujaratiRegular,
    color: Color.colorWhite,
    fontWeight: "bold",
  },
  vectorIcon: {
    width: 40,
    height: 40,
    // Removed position: "absolute" since the parent already has
    // justifyContent: "center" and alignItems: "center"
  },
});
