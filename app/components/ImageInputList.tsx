import { ImagePickerAsset } from "expo-image-picker";
import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

interface ImageInputListProps {
  imageUris: [];
  onChangeImages: (images: ImagePickerAsset[]) => void;
  onRemoveImage: (uri: string) => void;
}

export default function ImageInputList({
  imageUris = [],
  onChangeImages,
  onRemoveImage,
}: ImageInputListProps) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                changeImages={(images) => onChangeImages(images)}
                removeImage={onRemoveImage}
              />
            </View>
          ))}

          <ImageInput
            changeImages={(images) => onChangeImages(images)}
            removeImage={onRemoveImage}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
