// src/components/atoms/ImagePicker.tsx

import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import { COLORS, SIZES, FONTS } from '../atoms/Theme'; // Import from theme.tsx

interface ImagePickerProps {
  imageUri: string | null;
  onSelectImage: (uri: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ imageUri, onSelectImage }) => {
  const handleSelectImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.7,
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        if (selectedImage.uri) {
          onSelectImage(selectedImage.uri);
        }
      }
    });
  };

  return (
    <TouchableOpacity onPress={handleSelectImage} style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Text style={styles.text}>Select Profile Photo</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginVertical: SIZES.margin,
    backgroundColor: COLORS.surface,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    color: '#666',
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
});

export default ImagePicker;
