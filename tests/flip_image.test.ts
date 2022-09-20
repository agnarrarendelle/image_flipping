import { isImageNameValid, isImageUrlValid } from "../src/check_image";
import { downLoadImage } from "../src/process_image";

describe("test image url", () => {
  test("valid image url", async () => {
    const result = await isImageUrlValid(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
    );
    expect(result).toBe(true);
  });

  test("invalid image url-empty", async () => {
    const result = await isImageUrlValid(" ");
    expect(result).toBe(false);
  });

  test("invalid image url-not exist", async () => {
    const result = await isImageUrlValid("https://notexist.png");
    expect(result).toBe(false);
  });
});

describe("test image name", () => {
  test("valid image name", async () => {
    const result = isImageNameValid("valid-name")
    expect(result).toBe(true);
  });
  test("valid image name-empty", async () => {
    const result = isImageNameValid(" ")
    expect(result).toBe(false);
  });
  test("valid image name-contains space", async () => {
    const result = isImageNameValid("valid name")
    expect(result).toBe(false);
  });
});

describe("test download image",()=>{
    test("valid url",async()=>{
        const res = await downLoadImage("https://image.shutterstock.com/image-illustration/1234-option-colored-icons-letter-260nw-2159110883.jpg")
        expect(res).toBeDefined();
    })
    test("invalid url-empty",async()=>{
        const res = await downLoadImage("  ")
        expect(res).not.toBeDefined();
    })
    test("invalid url-nonexist",async()=>{
        const res = await downLoadImage("https://someimage.jpg")
        expect(res).not.toBeDefined();
    })
})
