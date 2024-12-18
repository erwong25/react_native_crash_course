import { View, Text } from "react-native";
import React from "react";
import { Video } from "expo-av";

const Create = () => {
  return (
    <View>
      <Video
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        }}
        shouldPlay
      />
    </View>
  );
};

export default Create;
