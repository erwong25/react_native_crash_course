import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import { getUserPosts, searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Image } from "expo-image";
import { icons } from "@/constants";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext;
  const { data: posts } = useAppwrite(() => getUserPosts(user.$id));

  //3:28:39

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity>
              <Image
                source={icons.logout}
                style={{ width: 24, height: 24 }}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
