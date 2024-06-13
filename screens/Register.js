import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <View style={[styles.groupFname, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Họ và tên</Text>
      </View>
      <View style={[styles.groupPhoneNumber, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Mã số sinh viên</Text>
      </View>
      <View style={[styles.groupPhoneNumber1, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Số điện thoại</Text>
      </View>
      <View style={[styles.groupBirthday, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Ngày sinh</Text>
      </View>
      <View style={[styles.groupBirthday1, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Mật khẩu</Text>
      </View>
      <View style={[styles.groupBirthday2, styles.groupLayout1]}>
        <View style={[styles.groupFnameChild, styles.groupChildPosition]} />
        <Text style={styles.hVTn}>Nhập lại mật khẩu</Text>
      </View>
      <Pressable
        style={[styles.groupRegister, styles.groupLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={[styles.groupRegisterChild, styles.groupLayout]} />
        <Text style={[styles.ngK, styles.ngKTypo]}>Đăng ký</Text>
      </Pressable>
      <Text style={[styles.ngK1, styles.ngKTypo]}>Đăng ký</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.tiNgContainer, styles.tiNgContainerTypo]}>
        <Text style={styles.tiNg}>{`Tôi đồng ý với các `}</Text>
        <Text style={styles.iuKhonS}>Điều khoản sử dụng</Text>
        <Text style={styles.tiNg}>{` và `}</Text>
        <Text style={styles.iuKhonS}>Chính sach bảo mật</Text>
      </Text>
      <Pressable
        style={styles.quayLiTrangContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.quayLiTrangNgNhp, styles.tiNgContainerTypo]}>
          Quay lại trang đăng nhập
        </Text>
      </Pressable>
      <Image
        style={styles.logoRemovebgPreview5Icon}
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
  groupLayout: {
    height: 40,
    width: 362,
    position: "absolute",
  },
  ngKTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  tiNgContainerTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
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
  hVTn: {
    top: 10,
    left: 22,
    fontSize: FontSize.size_base,
    color: Color.colorMediumseagreen_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1.1,
    position: "absolute",
  },
  groupFname: {
    top: 344,
    left: 14,
    width: 362,
  },
  groupPhoneNumber: {
    top: 396,
    left: 14,
    width: 362,
  },
  groupPhoneNumber1: {
    top: 448,
    left: 14,
    width: 362,
  },
  groupBirthday: {
    top: 500,
    left: 14,
    width: 362,
  },
  groupBirthday1: {
    top: 552,
    left: 14,
    width: 362,
  },
  groupBirthday2: {
    top: 604,
    left: 14,
    width: 362,
  },
  groupRegisterChild: {
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  ngK: {
    top: 8,
    left: 136,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.4,
    color: Color.colorWhite,
    width: 89,
  },
  groupRegister: {
    top: 722,
    left: 9,
  },
  ngK1: {
    top: 251,
    left: 113,
    fontSize: FontSize.size_17xl,
    letterSpacing: 2.5,
    color: Color.colorAquamarine,
    width: 164,
    height: 42,
    textShadowColor: "#a0fddb",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  vectorIcon: {
    height: "2.67%",
    width: "5.77%",
    top: "80.21%",
    right: "85%",
    bottom: "17.12%",
    left: "9.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tiNg: {
    color: Color.colorBlack,
  },
  iuKhonS: {
    color: Color.colorMediumseagreen_100,
  },
  tiNgContainer: {
    top: 670,
    left: 72,
    textAlign: "center",
    width: 267,
    height: 36,
    position: "absolute",
  },
  quayLiTrangNgNhp: {
    textDecoration: "underline",
    color: Color.colorMediumseagreen_100,
    textAlign: "left",
  },
  quayLiTrangContainer: {
    left: 94,
    top: 794,
    position: "absolute",
  },
  logoRemovebgPreview5Icon: {
    top: -7,
    left: 63,
    width: 264,
    height: 280,
    position: "absolute",
  },
  register: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Register;
