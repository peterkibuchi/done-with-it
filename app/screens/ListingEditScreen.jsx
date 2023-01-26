import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  Screen,
  SubmitButton,
} from "../components";

const categories = [
  { label: "Category", value: null },
  { label: "Clothing", value: 1 },
  { label: "Electronics", value: 2 },
  { label: "Furniture", value: 3 },
  { label: "Other", value: 4 },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <AppFormPicker items={categories} name="category" width="50%" />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={4}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
