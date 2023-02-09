import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";

import { colors, defaultStyles } from "../../config";
import ErrorMessage from "./ErrorMessage";

export default function FormPicker({ items, name, width = "100%" }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <View style={[styles.container, { width }]}>
        <Picker
          selectedValue={values[name]}
          onValueChange={(itemValue) => setFieldValue(name, itemValue)}
        >
          {items.map(({ label, value }) => (
            <Picker.Item
              key={value}
              label={label}
              value={value}
              style={{
                ...defaultStyles.text,
                color: value ? colors.dark : colors.medium,
              }}
            />
          ))}
        </Picker>
      </View>

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.extralight,
    borderRadius: 25,
    marginVertical: 10,
  },
});
