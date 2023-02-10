import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "../config";
import { logger } from "../utils";

interface ImageInputProps {
  imageUri?: string;
  changeImages: (images: ImagePicker.ImagePickerAsset[]) => void;
  removeImage: (imageUri: string) => void;
}

export default function ImageInput({
  imageUri,
  changeImages,
  removeImage,
}: ImageInputProps) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = async () => {
    if (!imageUri) {
      await selectImages();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => removeImage(imageUri) },
        { text: "No" },
      ]);
    }
  };

  const selectImages = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!canceled) changeImages(assets);
    } catch (error) {
      logger.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.extralight,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
});
