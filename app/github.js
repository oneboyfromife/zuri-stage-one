import * as React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {WebView} from "react-native-webview";
import {useRouter} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const router = useRouter();

  const handleBackPress = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: 20}}>
      <View style={{flexDirection: "row", alignItems: "center",justifyContent:'space-between', padding: 16}}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize: 18,}}>
          Oneboyfromife's Github
        </Text>
        <View></View>
      </View>
      <WebView
        style={styles.container}
        source={{uri: "https://github.com/oneboyfromife"}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
