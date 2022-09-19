import axios from "axios";
export const isImageUrlValid = (imageUrl: string) => {
  return axios
    .get(imageUrl)
    .then((x) => true)
    .catch((x) => false);
};

export const isImageNameValid = (name: string) => {
  return name.trim().length != 0;
};


