import Jimp from "jimp";
import promptSync from "prompt-sync";
import axios from "axios";
const prompt = promptSync({ sigint: true });

const isImageValid = (imageUrl: string) => {
  return axios
    .get(imageUrl)
    .then((x) => true)
    .catch((x) => false);
};

(async () => {
  //   const image = await Jimp.read(`${__dirname}/${imgUrl}`);
  //   try {
  //     const flippedImage = await image.flip(true, true);
  //     await flippedImage.write("flip1.png");
  //   } catch (e) {
  //     process.exit(1);
  //   }
  //   console.log("done");

  while (true) {
    const imgUrl = prompt("Please Enter Image Url:");
    const imgName = prompt("Please Enter Name of Image:");
    const imageValid = await isImageValid(imgUrl);
    if (!imageValid) {
      console.log("please enter a valid image url");
      continue;
    }

    const image = await Jimp.read(imgUrl);
    try {
      const flippedImage = await image.flip(true, true);
      await flippedImage.write(`${imgName}`);
    } catch (e) {}
  }
})();
