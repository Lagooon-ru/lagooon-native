export const validatePassword = (password: string) => {
  // const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  // return regex.test(password);

  return password.length > 7
};