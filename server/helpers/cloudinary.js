const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
    cloud_name: '*',
    api_key: '*',
    api_secret: '*',
});

const storage = new multer.memoryStorage();
async function handleimageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file,{
        resource_type: "auto",
    });
    return result;

}

const upload = multer({storage});
module.exports={upload , handleImageUploadUtil};