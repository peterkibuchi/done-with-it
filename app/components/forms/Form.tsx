import { Formik } from "formik";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  initialValues: Object;
  onSubmit: (values: any, { resetForm: any }) => void;
  validationSchema: Object;
}

export default function Form({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
