import { isImageNameValid, isImageUrlValid } from "../src/check_image";

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
