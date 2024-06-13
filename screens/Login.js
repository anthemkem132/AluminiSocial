import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Text style={[styles.ngNhp, styles.nhpTypo]}>Đăng nhập</Text>
      <View style={styles.groupLogin}>
        <View style={styles.groupLoginChild} />
        <Text style={[styles.ngNhp1, styles.nhpTypo]}>Đăng nhập</Text>
      </View>
      <Pressable
        style={styles.qunMtKhuContainer}
        onPress={() => navigation.navigate("ForgetPassword")}
      >
        <Text style={styles.qunMtKhuTypo}>Quên mật khẩu?</Text>
      </Pressable>
      <View style={[styles.groupRegister, styles.groupLayout2]}>
        <Text style={[styles.bnChaC, styles.ngK1Typo]}>
          Bạn chưa có tài khoản?
        </Text>
        <Pressable
          style={[styles.ngK, styles.ngKPosition]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={[styles.ngK1, styles.ngK1Typo]}>Đăng ký</Text>
        </Pressable>
      </View>
      <View style={[styles.groupAccount, styles.groupLayout1]}>
        <View style={[styles.groupAccountChild, styles.groupChildBorder]} />
        <Text style={[styles.mSSinh, styles.mSSinhTypo]}>Tài khoản</Text>
      </View>
      <View style={[styles.groupPassword, styles.groupLayout1]}>
        <View style={[styles.groupAccountChild, styles.groupChildBorder]} />
        <Text style={[styles.mSSinh, styles.mSSinhTypo]}>Mật khẩu</Text>
        <Image
          style={styles.iconEyeOutline}
          contentFit="cover"
          source={require("../assets/-icon-eye-outline.png")}
        />
      </View>
      <View style={[styles.groupLoginWith, styles.groupLayout2]}>
        <Text style={[styles.ngNhpBng, styles.qunMtKhuTypo]}>
          Đăng nhập bằng
        </Text>
        <View style={[styles.groupLoginWithChild, styles.groupPosition1]} />
        <View style={[styles.groupLoginWithItem, styles.groupPosition1]} />
      </View>
      <View style={[styles.groupGoogle, styles.groupLayout]}>
        <View style={[styles.groupGoogleChild, styles.groupLayout]} />
        <Text style={[styles.google, styles.mSSinhTypo]}>Google</Text>
        <Image
          style={[styles.google1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/google-1.png")}
        />
      </View>
      <View style={[styles.groupFacebook, styles.groupLayout]}>
        <View style={[styles.groupGoogleChild, styles.groupLayout]} />
        <Text style={[styles.facebook, styles.mSSinhTypo]}>Facebook</Text>
        <Image
          style={[styles.facebook1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-1.png")}
        />
      </View>
      <Image
        style={styles.logoRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nhpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout2: {
    height: 19,
    position: "absolute",
  },
  ngK1Typo: {
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ngKPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 39,
    width: 362,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorMediumseagreen_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  mSSinhTypo: {
    top: 10,
    color: Color.colorMediumseagreen_200,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  qunMtKhuTypo: {
    color: Color.colorMediumseagreen_200,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  groupPosition1: {
    height: 1,
    borderTopWidth: 1,
    top: 10,
    borderColor: Color.colorMediumseagreen_200,
    borderStyle: "solid",
    position: "absolute",
  },
  groupLayout: {
    width: 137,
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 29,
    width: 29,
    top: 5,
    position: "absolute",
  },
  ngNhp: {
    top: 251,
    left: 89,
    fontSize: FontSize.size_17xl,
    letterSpacing: 2.5,
    color: Color.colorAquamarine,
    width: 211,
    height: 42,
    textShadowColor: "#a0fddb",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  groupLoginChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    height: 40,
    width: 362,
    position: "absolute",
  },
  ngNhp1: {
    top: 8,
    left: 122,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
    color: Color.colorWhite,
    width: 117,
  },
  groupLogin: {
    top: 489,
    height: 40,
    width: 362,
    left: 14,
    position: "absolute",
  },
  qunMtKhuContainer: {
    left: 239,
    top: 455,
    position: "absolute",
  },
  bnChaC: {
    color: "rgba(108, 108, 108, 0.5)",
    left: 0,
    top: 0,
    position: "absolute",
  },
  ngK1: {
    color: Color.colorMediumseagreen_100,
  },
  ngK: {
    left: 206,
  },
  groupRegister: {
    top: 799,
    width: 275,
    left: 56,
  },
  groupAccountChild: {
    borderWidth: 1,
    height: 39,
    width: 362,
    position: "absolute",
  },
  mSSinh: {
    left: 22,
  },
  groupAccount: {
    top: 342,
    left: 14,
    height: 39,
  },
  iconEyeOutline: {
    height: "56.41%",
    width: "6.08%",
    top: "20.51%",
    right: "3.87%",
    bottom: "23.08%",
    left: "90.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPassword: {
    top: 401,
    left: 14,
    height: 39,
  },
  ngNhpBng: {
    left: 111,
    top: 0,
    position: "absolute",
  },
  groupLoginWithChild: {
    width: 105,
    left: 0,
  },
  groupLoginWithItem: {
    left: 256,
    width: 107,
  },
  groupLoginWith: {
    top: 567,
    width: 362,
    height: 19,
    left: 14,
  },
  groupGoogleChild: {
    borderWidth: 2,
    borderColor: Color.colorMediumseagreen_200,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  google: {
    left: 56,
  },
  google1Icon: {
    left: 22,
  },
  groupGoogle: {
    left: 36,
    top: 616,
    width: 137,
  },
  facebook: {
    left: 44,
  },
  facebook1Icon: {
    left: 11,
  },
  groupFacebook: {
    left: 217,
    top: 616,
    width: 137,
  },
  logoRemovebgPreview1Icon: {
    top: -8,
    left: 63,
    width: 264,
    height: 280,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;
