import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  Screen,
  SubmitButton,
} from "../components";
import { useLocation } from "../hooks";

const categories = [
  { label: "Category", value: null },
  { label: "Clothing", value: 1 },
  { label: "Electronics", value: 2 },
  { label: "Furniture", value: 3 },
  { label: "Other", value: 4 },
];

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image"),
  title: Yup.string().required().min(4).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          images: [],
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values, location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <FormField maxLength={255} name="title" placeholder="Title" />

        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />

        <FormPicker items={categories} name="category" width="50%" />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={4}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
