import { createRef } from "react";

export const navigationRef = createRef();

export const navigate = (name: string, params: Object) => {
  navigationRef.current?.navigate(name, params);
};
