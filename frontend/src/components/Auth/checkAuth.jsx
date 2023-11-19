// Checks if a valid auth token is present
const checkAuthToken = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="));
  return Boolean(token);
};

export default checkAuthToken;
