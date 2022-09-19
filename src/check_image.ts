import axios from "axios";
export const isImageUrlValid = (imageUrl: string) => {
  return axios
    .get(imageUrl)
    .then((x) => true)
    .catch((x) => false);
};

export const isImageNameValid = (name: string) => {
  const trimmedName = name.trim();
  return trimmedName.length != 0 && !trimmedName.includes(" ");
};
