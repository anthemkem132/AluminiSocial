import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <Image
        style={styles.avatar2Icon}
        contentFit="cover"
        source={require("../assets/avatar-2.png")}
      />
      <View style={[styles.homeChild, styles.homeLayout]} />
      <View style={[styles.homeItem, styles.homeLayout]} />
      <Text style={styles.bnAngNgh}>{`Bạn đang nghĩ gì
`}</Text>
      <View style={styles.topNavigation}>
        <View style={[styles.home1Wrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.home1Icon}
            contentFit="cover"
            source={require("../assets/home-1.png")}
          />
        </View>
        <View style={[styles.iconlyboldmessageWrapper, styles.wrapperFlexBox]}>
          <Image
            style={styles.iconlyboldmessage}
            contentFit="cover"
            source={require("../assets/iconlyboldmessage.png")}
          />
        </View>
      </View>
      <Image
        style={styles.textPhotoIcon}
        contentFit="cover"
        source={require("../assets/text-photo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  wrapperFlexBox: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 50,
  },
  avatar2Icon: {
    top: 70,
    left: 15,
    width: 64,
    height: 66,
    position: "absolute",
  },
  homeChild: {
    top: 59,
    left: 174,
  },
  homeItem: {
    top: 55,
    left: 228,
  },
  bnAngNgh: {
    top: 98,
    left: 103,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  home1Icon: {
    borderRadius: Border.br_11xl,
    width: 45,
    height: 40,
  },
  home1Wrapper: {
    width: 51,
  },
  iconlyboldmessage: {
    width: 24,
    height: 24,
  },
  iconlyboldmessageWrapper: {
    width: 44,
    marginLeft: 272.6,
  },
  topNavigation: {
    top: 15,
    left: 11,
    flexDirection: "row",
    position: "absolute",
  },
  textPhotoIcon: {
    top: 86,
    left: 90,
    width: 230,
    height: 34,
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Home;
