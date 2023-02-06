import { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import listingsApi from "../api/listings";
import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  Screen,
  SubmitButton,
} from "../components";
import { useLocation } from "../hooks";
import UploadScreen from "./UploadScreen";

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

export interface Listing {
  category: {
    backgroundColor: string;
    icon: string;
    label: string;
    value: number;
  };
  description: string;
  imageUris: string[];
  location: Location | undefined;
  price: string;
  title: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Category {
  backgroundColor: string;
  icon: string;
  label: string;
  value: number;
}

export default function ListingEditScreen() {
  const [progress, setProgress] = useState(0);
  const [uploadScreenVisible, setUploadScreenVisible] = useState(false);

  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadScreenVisible(true);
    const response = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!response.ok) {
      setUploadScreenVisible(false);
      return alert("Could not save the listing.");
    }

    resetForm();
  };

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
        onSubmit={handleSubmit}
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

      <UploadScreen
        onDone={() => setUploadScreenVisible(false)}
        progress={progress}
        visible={uploadScreenVisible}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
