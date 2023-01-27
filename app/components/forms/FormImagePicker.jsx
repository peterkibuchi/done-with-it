import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleChangeImages = (images) => {
    setFieldValue(name, images);
  };

  const handleRemoveImage = (uri) => {
    const newImages = imageUris.filter((imageUri) => imageUri !== uri);
    setFieldValue(name, newImages);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        // onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
        onChangeImages={handleChangeImages}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
