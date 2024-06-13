import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const ChangePassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changePassword}>
      <Pressable
        style={styles.groupRegister}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.groupRegisterChild, styles.groupChildLayout]} />
        <Text style={[styles.xcNhnI, styles.xcNhnITypo]}>
          Xác nhận đổi mật khẩu
        </Text>
      </Pressable>
      <Text style={[styles.iMtKhu, styles.xcNhnITypo]}>Đổi mật khẩu</Text>
      <Pressable
        style={styles.quayLiTrangContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.quayLiTrangNgNhp, styles.nhpTypo]}>
          Quay lại trang đăng nhập
        </Text>
      </Pressable>
      <View style={styles.groupParent}>
        <View style={[styles.groupFnameParent, styles.groupLayout]}>
          <View style={[styles.groupFnameParent, styles.groupLayout]}>
            <View style={[styles.groupFnameChild, styles.groupLayout]} />
            <Text style={[styles.nhpMtKhu, styles.nhpTypo]}>Nhập mật khẩu</Text>
          </View>
          <Image
            style={styles.iconEyeOutline}
            contentFit="cover"
            source={require("../assets/-icon-eye-outline.png")}
          />
        </View>
        <View style={[styles.groupFnameGroup, styles.groupLayout]}>
          <View style={[styles.groupFnameParent, styles.groupLayout]}>
            <View style={[styles.groupFnameChild, styles.groupLayout]} />
            <Text style={[styles.nhpMtKhu, styles.nhpTypo]}>
              Nhập lại mật khẩu
            </Text>
          </View>
          <Image
            style={styles.iconEyeOutline}
            contentFit="cover"
            source={require("../assets/-icon-eye-outline.png")}
          />
        </View>
      </View>
      <Image
        style={styles.logoRemovebgPreview4Icon}
        contentFit="cover"
        source={require("../assets/logoremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    borderRadius: Border.br_xl,
    top: 0,
  },
  xcNhnITypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  nhpTypo: {
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    textAlign: "left",
  },
  groupLayout: {
    height: 39,
    left: 0,
    width: 362,
    position: "absolute",
  },
  groupRegisterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    left: 0,
    borderRadius: Border.br_xl,
    height: 40,
    width: 362,
    position: "absolute",
  },
  xcNhnI: {
    top: 8,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
    color: Color.colorWhite,
    width: 250,
    left: 56,
  },
  groupRegister: {
    top: 477,
    height: 40,
    width: 362,
    left: 14,
    position: "absolute",
  },
  iMtKhu: {
    top: 250,
    left: 66,
    fontSize: FontSize.size_17xl,
    letterSpacing: 2.5,
    color: Color.colorAquamarine,
    width: 258,
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
    color: Color.colorMediumseagreen_100,
  },
  quayLiTrangContainer: {
    left: 94,
    top: 794,
    position: "absolute",
  },
  groupFnameChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorMediumseagreen_200,
    borderWidth: 1,
    borderRadius: Border.br_xl,
    top: 0,
  },
  nhpMtKhu: {
    top: 10,
    left: 22,
    fontSize: FontSize.size_base,
    color: Color.colorMediumseagreen_200,
    position: "absolute",
  },
  groupFnameParent: {
    top: 0,
    height: 39,
  },
  iconEyeOutline: {
    height: "56.41%",
    width: "6.08%",
    top: "17.95%",
    right: "3.31%",
    bottom: "25.64%",
    left: "90.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupFnameGroup: {
    top: 56,
  },
  groupParent: {
    top: 337,
    height: 95,
    width: 362,
    left: 14,
    position: "absolute",
  },
  logoRemovebgPreview4Icon: {
    top: -9,
    width: 264,
    height: 280,
    left: 56,
    position: "absolute",
  },
  changePassword: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ChangePassword;
