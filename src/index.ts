import Jimp from "jimp";
import promptSync from "prompt-sync";
import axios from "axios";
import fs from "fs";
const prompt = promptSync({ sigint: true });
const outputDir = "output";
const isImageValid = (imageUrl: string) => {
  return axios
    .get(imageUrl)
    .then((x) => true)
    .catch((x) => false);
};

(async () => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  while (true) {
    const imgUrl = prompt("Please Enter Image Url:");
    const imageValid = await isImageValid(imgUrl);
    if (!imageValid) {
      console.log("please enter a valid image url");
      continue;
    }

    const imgName = prompt("Please Enter Name of Image:");
    

    const image = await Jimp.read(imgUrl);
    try {
      const flippedImage = await image.flip(true, true);
      await flippedImage.writeAsync(`${outputDir}/${imgName}.png`);
    } catch (e) {
      console.log("Cannot process your image. Please try again");
      continue;
    }
  }
})();
