import apiClient from "./client";

const endpoint = "/messages";

const send = (message: string, listingId: number) =>
  apiClient.post(endpoint, { message, listingId });

export default { send };
