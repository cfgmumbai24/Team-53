import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfully
    // so now delete it
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // remove the locally saved temporay file as upload got failed
    // check if file exists
    fs.unlinkSync(localFilePath);
    return null;
  }
};

const deleteOnCloudinary = async (cloudinaryUrl) => {
  let publicId = cloudinaryUrl.split("/").pop().split(".")[0];
  await cloudinary.uploader.destroy(publicId);
};

export { uploadOnCloudinary, deleteOnCloudinary };

// cloudinary.v2.api
//   .delete_resources(['rwxiztgllkvfvmedhyyk'],
//     { type: 'upload', resource_type: 'image' })
//   .then(console.log);