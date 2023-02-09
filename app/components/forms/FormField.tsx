import { useFormikContext } from "formik";
import { TextInputProps } from "react-native";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface FormFieldProps extends TextInputProps {
  name: string;
  width?: string;
}

export default function FormField({
  name,
  width,
  ...otherProps
}: FormFieldProps) {
  const { errors, setFieldTouched, setFieldValue, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
