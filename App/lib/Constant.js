export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.API_ENDPOINT
    : "http://localhost:4000/api/";
