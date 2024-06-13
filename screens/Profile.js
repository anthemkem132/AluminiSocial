import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.topNavigation}>
        <View style={[styles.home1Wrapper, styles.parentWrapperFlexBox]}>
          <Image
            style={styles.home1Icon}
            contentFit="cover"
            source={require("../assets/home-1.png")}
          />
        </View>
        <View
          style={[styles.iconlyboldmessageWrapper, styles.parentWrapperFlexBox]}
        >
          <Image
            style={styles.iconlyboldmessage}
            contentFit="cover"
            source={require("../assets/iconlyboldmessage.png")}
          />
        </View>
      </View>
      <View style={[styles.card, styles.parentWrapperFlexBox]}>
        <Image
          style={styles.avatar1Icon}
          contentFit="cover"
          source={require("../assets/avatar-1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.parentWrapperFlexBox}>
            <Text style={styles.k}>1k</Text>
            <Text style={[styles.ngiTheoDi, styles.all1Typo]}>
              người theo dõi
            </Text>
          </View>
          <View style={[styles.parent, styles.parentWrapperFlexBox]}>
            <Text style={styles.k}>342</Text>
            <Text style={[styles.ngiTheoDi, styles.all1Typo]}>
              đang theo dõi
            </Text>
          </View>
        </View>
        <Text style={[styles.miuTBn, styles.all1Typo]}>miêu tả bản thân</Text>
        <View style={styles.frameParent}>
          <View style={[styles.theoDiWrapper, styles.wrapperShadowBox]}>
            <Text style={[styles.theoDi, styles.theoDiTypo]}>theo dõi</Text>
          </View>
          <View style={[styles.nhnTinWrapper, styles.wrapperShadowBox]}>
            <Text style={[styles.nhnTin, styles.theoDiTypo]}>nhắn tin</Text>
          </View>
        </View>
        <View style={[styles.categories, styles.parentWrapperFlexBox]}>
          <View style={styles.all}>
            <View style={styles.allParent}>
              <Text style={[styles.all1, styles.all1Typo]}>All</Text>
              <View style={styles.frameChild} />
            </View>
          </View>
          <View style={[styles.photos, styles.photosSpaceBlock]}>
            <View style={styles.allParent}>
              <Text style={[styles.all1, styles.all1Typo]}>hình ảnh</Text>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-8.png")}
              />
            </View>
          </View>
          <View style={styles.photosSpaceBlock}>
            <View style={styles.allParent}>
              <Text style={[styles.all1, styles.all1Typo]}>Videos</Text>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-8.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  all1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm_1,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
  },
  wrapperShadowBox: {
    width: 121,
    borderRadius: 20,
    shadowOpacity: 1,
    elevation: 20.19,
    shadowRadius: 20.19,
    shadowOffset: {
      width: 0,
      height: 10.094486236572266,
    },
    height: 40,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  theoDiTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm_1,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
  },
  photosSpaceBlock: {
    marginLeft: 10.1,
    padding: 10,
  },
  home1Icon: {
    borderRadius: Border.br_11xl,
    width: 45,
    height: 40,
  },
  home1Wrapper: {
    width: 51,
    padding: 10,
    height: 44,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 50,
    justifyContent: "center",
  },
  iconlyboldmessage: {
    width: 24,
    height: 24,
  },
  iconlyboldmessageWrapper: {
    width: 44,
    marginLeft: 272.6,
    padding: 10,
    height: 44,
    backgroundColor: Color.colorAliceblue,
    borderRadius: 50,
    justifyContent: "center",
  },
  topNavigation: {
    top: 10,
    left: 11,
    flexDirection: "row",
    position: "absolute",
  },
  avatar1Icon: {
    width: 112,
    height: 113,
  },
  k: {
    fontSize: FontSize.size_base_1,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  ngiTheoDi: {
    marginTop: 5,
    color: Color.colorBlack,
  },
  parent: {
    marginLeft: 161.5,
  },
  frameParent: {
    marginTop: 10.1,
    flexDirection: "row",
  },
  miuTBn: {
    color: Color.colorSlategray,
    width: 294,
    marginTop: 10.1,
  },
  theoDi: {
    color: Color.colorWhite,
  },
  theoDiWrapper: {
    shadowColor: "rgba(87, 144, 223, 0.5)",
    backgroundColor: "#5790df",
  },
  nhnTin: {
    color: Color.colorBlack,
  },
  nhnTinWrapper: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    marginLeft: 20.2,
  },
  all1: {
    color: Color.colorBlack,
  },
  frameChild: {
    borderRadius: 2,
    backgroundColor: Color.colorSlategray,
    width: 15,
    height: 3,
  },
  allParent: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  all: {
    padding: 10,
    flexDirection: "row",
  },
  frameItem: {
    width: 6,
    height: 6,
  },
  photos: {
    flexDirection: "row",
  },
  categories: {
    marginTop: 10.1,
    flexDirection: "row",
  },
  card: {
    top: 91,
    left: 25,
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.colorIvory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Profile;
