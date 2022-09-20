import axios from "axios";
import sharp from "sharp";

export const outputDir = "output";

export const downLoadImage = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
    });
    return response.data as Buffer;
  } catch (e) {
    return undefined;
  }
};

export const writeToOutput = async (buf: Buffer, path: string) => {
  try {
    await sharp(buf).flip().flop().png().toFile(path);
  } catch (e) {
    throw new Error("cannot write to output");
  }
};
