export const validateUsername = (username: string) => {
  const regex = /^[a-z][a-z0-9]{7,29}$/;
  return regex.test(username);
};