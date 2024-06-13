import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ForgetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgetPassword}>
      <View style={[styles.groupFname, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.email}>Email</Text>
      </View>
      <Text style={[styles.nhpEmailCa, styles.nhpClr]}>
        Nhập email của bạn để nhận mã xác nhận lấy lại mật khẩu
      </Text>
      <View style={[styles.groupRegister, styles.groupLayout]}>
        <View style={[styles.groupRegisterChild, styles.groupLayout]} />
        <Text style={[styles.lyLiMt, styles.lyLiMtTypo]}>Lấy lại mật khẩu</Text>
      </View>
      <Text style={[styles.qunMtKhu, styles.lyLiMtTypo]}>Quên mật khẩu</Text>
      <Pressable
        style={styles.quayLiTrangContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.quayLiTrangNgNhp, styles.nhpClr]}>
          Quay lại trang đăng nhập
        </Text>
      </Pressable>
      <Image
        style={styles.logoRemovebgPreview2Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout1: {
    height: 39,
    width: 362,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  nhpClr: {
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
  },
  groupLayout: {
    height: 40,
    width: 362,
    position: "absolute",
  },
  lyLiMtTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupFnameChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorMediumseagreen_200,
    borderWidth: 1,
    height: 39,
    width: 362,
    position: "absolute",
  },
  email: {
    top: 10,
    left: 22,
    color: Color.colorMediumseagreen_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupFname: {
    top: 409,
    left: 14,
  },
  nhpEmailCa: {
    top: 343,
    left: 16,
    textAlign: "center",
    width: 357,
    height: 37,
    fontSize: FontSize.size_base,
    color: Color.colorMediumseagreen_100,
    position: "absolute",
  },
  groupRegisterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  lyLiMt: {
    top: 8,
    left: 92,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
    color: Color.colorWhite,
    width: 178,
  },
  groupRegister: {
    top: 477,
    left: 14,
  },
  qunMtKhu: {
    top: 250,
    left: 46,
    fontSize: FontSize.size_17xl,
    letterSpacing: 2.5,
    color: Color.colorAquamarine,
    width: 297,
    height: 42,
    textShadowColor: "#a0fddb",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  quayLiTrangNgNhp: {
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    textAlign: "left",
  },
  quayLiTrangContainer: {
    left: 94,
    top: 794,
    position: "absolute",
  },
  logoRemovebgPreview2Icon: {
    left: 59,
    width: 264,
    height: 280,
    top: 0,
    position: "absolute",
  },
  forgetPassword: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ForgetPassword;
