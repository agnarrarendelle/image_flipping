# Image Flipping 
A program that receives an image URL and flips it
## Required Software
- NodeJs
- TypeScript

## Install Dependencies
### ```npm i```

## Start the Program
### ```npm build && npm start```

## How to Use
- The program runs in a finity loop, and it will continue to task requests of flipping image
- First, it will ask the users to enter a valid image URL. After that, it will spend some time checking if the URL is valid
- Next, it will ask the users for a name to the output image. Please enter a name that does not contain any space
- After gaining the URL and name of the image, it will start downloading and flipping the image
- Finally, it will create a output directory(if it does not already exist) and store the flipped image to it