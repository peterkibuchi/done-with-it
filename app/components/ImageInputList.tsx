import { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

export default function ImageInputList({ imageUris = [], onRemoveImage }) {
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

          <ImageInput changeImages={(images) => onChangeImages(images)} />
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
