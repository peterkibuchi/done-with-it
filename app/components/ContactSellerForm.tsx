import { Alert, Keyboard, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { messagesApi } from "../api";
import Form from "./forms/Form";
import FormField from "./forms/FormField";
import SubmitButton from "./forms/SubmitButton";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(4).label("Message"),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: { seconds: 1 },
    });
  };

  return (
    <View>
      <Form
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </Form>
    </View>
  );
}