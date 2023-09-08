import React from 'react';
import {
  SafeAreaView, 
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Link } from 'expo-router';
import { GetFontSize, ScreenHeight, ScreenWidth } from '../src/utilities/dimension';
import { COLORS, FONT } from '../src/constants';

const Index = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    >
      <View
        style={{
          width: ScreenWidth,
          height: ScreenWidth,
          backgroundColor: "lightblue",
        }}
      >
        {/* User Profile Picture */}
        <Image
          source={require("../assets/images/akintunde.jpg")}
          style={{width: "100%", height: "100%"}}
        />
      </View>
      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          backgroundColor: COLORS.lightWhite,
          marginTop: -40,
          height: ScreenHeight - ScreenWidth + 40,
          width: ScreenWidth,
        }}
      >
        {/* User Name */}
        <Text
          style={{
            fontSize: GetFontSize(36),
            color: COLORS.primary,
            marginTop: 70,
            marginLeft: 30,
          }}
        >
          Welcome back,
        </Text>
        <Text
          style={{
            fontSize: GetFontSize(50),
            color: COLORS.primary,
            marginTop: -5,
            marginLeft: 30,
            marginBottom: 30
          }}
        >
          Oneboyfromife
        </Text>
        {/* Login Button */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/github" asChild>
            <Pressable
              style={{
                backgroundColor: COLORS.secondary,
                padding: 10,
                borderRadius: 10,
                margin: 10,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: GetFontSize(18),
                }}
              >
                Open Github
              </Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;