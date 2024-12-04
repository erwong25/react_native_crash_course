import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { Redirect, router, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import { useGlobalContext } from "@/context/GlobalProvider";

import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

export default function App() {
  const { isLoading, isLoggedIn, user } = useGlobalContext();
  console.log("isLoggedIn", isLoggedIn, user);
  if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center h-[85vh] px-4">
            <Image
              source={images.logo}
              style={{ width: 130, height: 84 }}
              contentFit="contain"
            />
            <Image
              source={images.cards}
              style={{ width: 380, height: 300 }}
              contentFit="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
            </View>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
            <Link href="/profile" className="text-white">
              profile
            </Link>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
