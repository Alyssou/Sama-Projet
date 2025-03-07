import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

// Import image assets
import Group13Img from "../assets/images/group1.png";
import Ellipse1 from "../assets/images/ellipse-113x.png";
import GoogleLogo from "../assets/images/google-logo3x.png";
import FacebookIcon from "../assets/images/facbook3x.png";
import Group2Img from "../assets/images/group23x.png";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} contentFit="cover" source={Group13Img} />

      {/* App Title */}
      <Text style={[styles.appTitle, styles.textCenter]}>PMed</Text>

      {/* White Background Container */}
      <View style={styles.whiteBackground} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>

      {/* Input Fields Container */}
      <View style={[styles.inputField, styles.shadowBox]} />
      <View style={[styles.inputField, styles.shadowBox, { top: 445 }]} />

      {/* Input Labels */}
      <Text style={[styles.inputLabel, styles.inputLabelTypo]}>
        Email or Phone Number
      </Text>
      <Text style={[styles.inputLabel, styles.inputLabelTypo, { top: 463 }]}>
        Password
      </Text>

      {/* Forgot Password Link */}
      <Text style={[styles.forgotPassword, styles.inputLabelTypo]}>
        Forgot Password ?
      </Text>

      {/* Register Link */}
      <Text style={[styles.registerLink, styles.inputLabelTypo]}>
        <Text style={styles.dontHaveAn}>Don’t have an account ? </Text>
        <Text style={styles.register}>Register</Text>
      </Text>

      {/* Sign In Text */}
      <Text style={[styles.signInText, styles.loginTextTypo]}>Sign in</Text>

      {/* Login Button */}
      <View style={[styles.loginButton, styles.shadowBox]} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={[styles.loginButtonTextContainer]}
      >
        <Text style={[styles.loginButtonText, styles.loginTextTypo]}>
          Login
        </Text>
      </TouchableOpacity>

      {/* Social Icons */}
      <Image
        style={[styles.socialIcon, styles.socialIconLayout]}
        contentFit="cover"
        source={Ellipse1}
      />
      <Image
        style={[styles.socialIcon, styles.socialIconLayout, { left: 171 }]}
        contentFit="cover"
        source={Ellipse1}
      />
      <Image
        style={[styles.socialIcon, styles.socialIconLayout, { left: 232 }]}
        contentFit="cover"
        source={Ellipse1}
      />

      {/* Google Logo */}
      <Image
        style={[styles.googleLogo, styles.iconLayout]}
        contentFit="cover"
        source={GoogleLogo}
      />

      {/* Facebook Icon */}
      <Image
        style={[styles.facebookIcon, styles.iconPosition]}
        contentFit="cover"
        source={FacebookIcon}
      />

      {/* Group Icon */}
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={Group2Img}
      />

      {/* Or Sign Up Text */}
      <Text style={styles.orSignUpText}>Or Sign up With</Text>

      {/* Gradient Lines */}
      <LinearGradient
        style={[styles.gradientLine, styles.gradientLineLayout]}
        locations={[0, 1]}
        colors={["#126afb", "rgba(196, 196, 196, 0)"]}
      />
      <LinearGradient
        style={[styles.gradientLine, styles.gradientLineLayout, { left: 390 }]}
        locations={[0, 1]}
        colors={["#126afb", "rgba(196, 196, 196, 0)"]}
        transform={[{ rotate: "-180deg" }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorRoyalblue,
  },
  textCenter: {
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  shadowBox: {
    height: 53,
    width: 323,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    left: 34,
    position: "absolute",
  },
  inputLabelTypo: {
    height: 18,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  loginTextTypo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  socialIconLayout: {
    height: 47,
    width: 47,
    top: 677,
    position: "absolute",
  },
  iconPosition: {
    bottom: "15.39%",
    top: "81.41%",
    height: "3.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gradientLineLayout: {
    backgroundColor: "transparent",
    height: 2,
    width: 119,
    position: "absolute",
  },
  logo: {
    height: "5.33%",
    width: "11.54%",
    top: "8.89%",
    right: "72.31%",
    bottom: "85.78%",
    left: "16.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appTitle: {
    top: 75,
    left: 113,
    fontSize: FontSize.size_17xl,
    letterSpacing: 1.8,
    fontFamily: FontFamily.gAMECUBEN,
    width: 223,
  },
  whiteBackground: {
    top: 168,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 699,
    left: 0,
    position: "absolute",
  },
  welcomeText: {
    top: 268,
    left: 127,
    fontSize: FontSize.size_13xl,
    color: Color.colorDarkslategray_100,
    width: 136,
    height: 36,
    textAlign: "left",
    fontFamily: FontFamily.outfitBold,
    fontWeight: "700",
    position: "absolute",
  },
  inputField: {
    top: 376,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  inputLabel: {
    top: 393,
    width: 248,
    color: Color.colorDimgray_100,
    left: 51,
  },
  forgotPassword: {
    top: 510,
    left: 220,
    width: 138,
    color: Color.colorGray_200,
  },
  dontHaveAn: {
    color: Color.colorGray_200,
  },
  register: {
    color: Color.colorRoyalblue,
  },
  registerLink: {
    top: 742,
    left: 79,
    width: 232,
  },
  signInText: {
    top: 579,
    left: 176,
    width: 60,
    height: 26,
  },
  loginButton: {
    top: 562,
    backgroundColor: Color.colorRoyalblue,
  },
  loginButtonTextContainer: {
    top: 575,
    left: 160,
    width: 70,
    height: 25,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: FontSize.size_3xl,
  },
  socialIcon: {
    left: 110,
  },
  googleLogo: {
    top: 687,
    left: 120,
    height: 27,
    overflow: "hidden",
  },
  facebookIcon: {
    width: "6.92%",
    right: "46.64%",
    left: "47.44%",
  },
  groupIcon: {
    width: "5.82%",
    right: "31.59%",
    left: "62.59%",
  },
  orSignUpText: {
    top: 642,
    left: 143,
    fontSize: FontSize.size_mini,
    color: "#555252",
    width: 105,
    height: 17,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  gradientLine: {
    top: 650,
    left: 0,
  },
});

export default LoginScreen;
