import { createRef } from "react";

const navigationRef = createRef();

const navigate = (name: string, params: Object) => {
  navigationRef.current?.navigate(name, params);
};

export default { navigationRef, navigate };
