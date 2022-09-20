import promptSync from "prompt-sync";
import fs from "fs";
import { isImageNameValid, isImageUrlValid } from "./check_image";
import { downLoadImage, writeToOutput } from "./process_image";
const prompt = promptSync({ sigint: true });
const outputDir = "output";

(async () => {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const imgUrl = prompt("Please Enter Image Url:");
    const imageValid = await isImageUrlValid(imgUrl);
    if (!imageValid) {
      console.log("please enter a valid image url");
      continue;
    }

    const imgName = prompt("Please Enter Name of Image:");
    if (!isImageNameValid(imgName)) {
      console.log("please enter a image name");
      continue;
    }

    const image = await downLoadImage(imgUrl);
    try {
      await writeToOutput(image!, `${outputDir}/${imgName}.png`);
    } catch (e) {
      console.log(`${e}. Please try again`);
      continue;
    }
  }
})();
