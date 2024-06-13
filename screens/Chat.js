import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily } from "../GlobalStyles";

const Chat = () => {
  return (
    <View style={styles.chat}>
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
        style={[styles.avatar3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-2.png")}
      />
      <Image
        style={[styles.avatar4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-2.png")}
      />
      <Image
        style={[styles.avatar4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-2.png")}
      />
      <Image
        style={[styles.avatar6Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-2.png")}
      />
      <Image
        style={styles.avatar7Icon}
        contentFit="cover"
        source={require("../assets/avatar-7.png")}
      />
      <Text style={styles.tinNhn}>{`Tin nhắn: `}</Text>
      <View style={styles.chatChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 50,
  },
  iconLayout: {
    height: 66,
    width: 64,
    top: 69,
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
    top: 17,
    left: 11,
    flexDirection: "row",
    position: "absolute",
  },
  avatar3Icon: {
    left: 14,
  },
  avatar4Icon: {
    left: 97,
  },
  avatar6Icon: {
    left: 180,
  },
  avatar7Icon: {
    top: 68,
    left: 263,
    width: 65,
    height: 67,
    position: "absolute",
  },
  tinNhn: {
    top: 151,
    left: 9,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  chatChild: {
    top: 199,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    height: 645,
    position: "absolute",
  },
  chat: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Chat;
