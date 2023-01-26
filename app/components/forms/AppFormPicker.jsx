import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";

import colors from "../../config/colors";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ items, name, width = "100%" }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <View style={[styles.container, { width }]}>
        <Picker
          selectedValue={values[name]}
          onValueChange={(itemValue) => setFieldValue(name, itemValue)}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
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
