import { FormikContextType, FormikValues, useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface FormPickerProps {
  name: string;
}

export default function FormImagePicker({ name }: FormPickerProps) {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormikContextType<FormikValues>>();
  const imageUris = values[name];

  const handleAddImage = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleChangeImages = (images: string[]) => {
    setFieldValue(name, images);
  };

  const handleRemoveImage = (uri: string) => {
    const newImages = imageUris.filter((imageUri: string) => imageUri !== uri);
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
