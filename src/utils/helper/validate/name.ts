export const validateName = (name: string) => {
  return name.length > 0 && name.length < 32;
};